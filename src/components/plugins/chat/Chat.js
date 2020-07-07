/**
 * The component for Chat App
 *
 * @version 0.0.1
 * @author Yalcin Tatar (https://github.com/yalcinos)
 */

import React, {useEffect, useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import {Platform, Text} from 'react-native';
import {Spinner, Icon, Button, Container} from 'native-base';
import {uploadImage} from './uploadImage';
import Fire from './Fire';
import ImagePicker from 'react-native-image-picker';

const Chat = ({route}) => {
  const {userInfo} = route.params;
  // Stored State - Redux hook
  const bootstrapState = useSelector((state) => state.bootstrap);
  let groupName = bootstrapState.circles[0].name;

  // ******************************************************//
  // ************ BEGININ OF STATES DECLARATIONS *********//
  // ***************************************************//
  const [message, setMessage] = useState({
    messages: [],
    isLoading: true,
  });
  // console.log(message);
  const [image, setImage] = useState();

  const welcomeMessage = {
    _id: 1,
    text: 'Chat with your friends, share photos with high quality🚀🚀🚀',
    user: {
      _id: 'kovan-team',
      name: 'Kovan Team',
      avatar: require('../../../assets/bee-1.png'),
    },
  };

  const getMessages = useCallback(async () => {
    await Fire.shared.getMessageHistory((msg) => {
      setMessage((prevstate) => ({
        ...prevstate,
        isWelcomeMessage: false,
        messages: GiftedChat.append(prevstate.messages, msg),
        isLoading: false,
      }));
    });
  }, []);

  useEffect(() => {
    // getMessages();

    Fire.shared.getMessageHistory((msg) => {
      setMessage((prevstate) => ({
        isWelcomeMessage: false,
        messages: GiftedChat.append(prevstate.messages, msg),
        isLoading: false,
      }));
    });

    if (message.messages.length === 0) {
      setMessage((prevstate) => ({
        isWelcomeMessage: true,
        messages: GiftedChat.append(prevstate.messages, welcomeMessage),
        isLoading: false,
      }));
    }

    //Unmount function
    return () => {
      console.log('...unmounting');
      Fire.shared.disConnectFromFireBase();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const user = () => {
    return {
      name: `${userInfo.firstName} ${userInfo.lastName}`,
      _id: userInfo.email,
    };
  };

  const options = {
    title: 'Upload An Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const getImage = async () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = {uri: response.uri};
        let path = response.uri;
        if (Platform.OS === 'ios') {
          path = '~' + path.substring(path.indexOf('/Documents'));
        }
        if (!response.fileName) {
          response.fileName = path.split('/').pop();
        }
        uploadImage(response.uri, response.fileName)
          .then((url) => {
            console.log('uploaded');
            setImage({image_uri: url});
            let userValue = user();
            Fire.shared.sendImages(url, userValue);
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <Icon name="md-send" style={{color: 'blue', marginRight: 10}} />
      </Send>
    );
  };
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          borderRadius: 20,
        }}
      />
    );
  };

  const renderCameraButton = () => {
    return (
      <Button transparent onPress={getImage}>
        <Icon name="ios-camera" />
      </Button>
    );
  };
  return !message.isLoading && !message.isWelcomeMessage ? (
    <Container>
      <GiftedChat
        messages={message.messages}
        onSend={Fire.shared.sendMessages}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        renderActions={renderCameraButton}
        renderUsernameOnMessage={true}
        user={user()}
      />
    </Container>
  ) : message.isWelcomeMessage ? (
    <Container>
      <GiftedChat
        messages={message.messages}
        onSend={Fire.shared.sendMessages}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        renderActions={renderCameraButton}
        renderUsernameOnMessage={true}
        user={user()}
      />
    </Container>
  ) : (
    <Spinner color="blue" />
  );
};

export default Chat;
