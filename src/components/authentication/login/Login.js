/**
 * The component for Login and
 *
 * @version 0.0.1
 * @author Yalcin Tatar (https://github.com/yalcinos)
 */

import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  loginUser,
  googleSignIn,
  checkGoogleSession,
  checkLocalSession,
  resetBootstrap,
} from '../../../redux';
import {GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID} from 'react-native-dotenv';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import styles from './loginStyles';

import {
  Container,
  Content,
  Button,
  Item,
  Label,
  Input,
  Form,
  Text,
} from 'native-base';
import {loginFormValidation} from './loginFormValidation';

const Login = ({navigation}) => {
  const userData = useSelector((state) => state.login);
  // console.log('loginpage', userData);
  const dispatch = useDispatch();

  // ******************************************************//
  // ************ BEGININ OF STATES DECLARATIONS *********//
  // ***************************************************//
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  });

  const [loginError, setloginError] = useState({
    email: {
      error: false,
    },
    password: {
      error: false,
    },
    firstRender: true,
  });

  // ******************************************************//
  // ************ END OF STATES DECLERATIONS *********//
  // ***************************************************//

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      webClientId: GOOGLE_WEB_CLIENT_ID,
    });
    //dispatch(checkGoogleSession);
    //dispatch(checkLocalSession);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //When there is no error at validation , run dispatch function and login
  // firstRender prob helps to stop sending fetch request when the app first render.
  useEffect(() => {
    if (
      !loginError.email.error &&
      !loginError.password.error &&
      !loginError.firstRender
    ) {
      dispatch(loginUser(loginData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginError]);

  // **********************************************************//
  // ************ BEGININ OF FUNCTIONS DECLARATIONS ***********//
  // **********************************************************//

  // normal login and google login check seperately and pass different params to the dash.
  const checkisLoggedIn = () => {
    if (
      userData.isLoggedin === 'True' ||
      userData.googleisLoggedin === 'True'
    ) {
      dispatch(resetBootstrap());
      navigation.navigate('Bootstrap');
    }
  };

  // ************************************************//
  // ************ BEGININ OF EVENT HANDLERS *********//
  // ************************************************//
  const handleLoginInputChanges = (key, value) => {
    setloginData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  const handleLoginButtonClick = () => {
    setloginError(loginFormValidation(loginData));
  };
  const handleGoogleButtonClick = () => {
    dispatch(googleSignIn);
    console.log(userData);
  };
  const handleForgotButtonClick = () => {
    navigation.navigate('ForgotPassword');
  };
  const handleSugnUpButtonClick = () => {
    navigation.navigate('SignUp');
  };
  const handleResendValidationEmailButtonClick = () => {
    navigation.navigate('ResendValidationEmail');
  };

  const showAlertErrorMessage = (errorMsg) => {
    return Alert.alert(
      'Error',
      errorMsg,
      [
        {
          text: 'OK',
          onPress: () => {
            userData.errorStatus = 'False';
            userData.error = '';
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };
  // ************************************************//
  // ************ END OF EVENT HANDLERS *********//
  // ************************************************//

  return (
    <Container>
      <Content style={{padding: 15}}>
        <Form>
          <Item>
            <Input
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={(val) => handleLoginInputChanges('email', val)}
            />
            {loginError.email.error && (
              <Label style={styles.textFieldError}>
                {loginError.email.message}
              </Label>
            )}
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={(value) =>
                handleLoginInputChanges('password', value)
              }
            />
            {loginError.password.error && (
              <Label style={styles.textFieldError}>
                {loginError.password.message}
              </Label>
            )}
          </Item>
          <Button
            block
            style={{marginTop: 20}}
            onPress={handleLoginButtonClick}>
            {userData.loading === true ? (
              (console.log(userData),
              (<ActivityIndicator size="small" color="#00ff00" />))
            ) : (
              <Text>Sign in</Text>
            )}
          </Button>
        </Form>

        <Text style={{marginTop: 15, textAlign: 'center'}}>Or</Text>

        <GoogleSigninButton
          style={{width: 192, height: 48, marginTop: 15}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleGoogleButtonClick}
        />

        <Button transparent onPress={handleForgotButtonClick}>
          <Text>Forgot Password</Text>
        </Button>

        <Button full light info onPress={handleSugnUpButtonClick}>
          <Text>Sign Up</Text>
        </Button>

        <Button transparent onPress={handleResendValidationEmailButtonClick}>
          <Text>Resend Validation Email</Text>
        </Button>

        {userData.isLoggedin === 'True' || userData.googleisLoggedin === 'True'
          ? checkisLoggedIn()
          : userData.error !== '' && userData.errorStatus === 'True'
          ? showAlertErrorMessage(userData.error)
          : null}
      </Content>
    </Container>
  );
};

export default Login;
