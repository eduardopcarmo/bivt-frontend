import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {signupUser} from '../../../redux';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
import signupStyles from './signupStyles';

const Signup = () => {
  const dispatch = useDispatch();
  const signupStatus = useSelector((state) => state.signup);

  const [userSignupDetails, setUserSignupDetails] = useState({
    firstName: '',
    lastName: '',
    eMail: '',
    password: '',
    coPassword: '',
  });

  const handleSignupInputChange = (key, value) => {
    setUserSignupDetails((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const submitSignupForm = () => {
    dispatch(signupUser(userSignupDetails));
  };

  return (
    <Container style={signupStyles.signupContainer}>
      <Header />
      <Content>
        <Form style={signupStyles.signupForm}>
          <Item stackedLabel>
            <Label>First Name</Label>
            <Input
              onChangeText={(val) => handleSignupInputChange('firstName', val)}
            />
          </Item>
          <Item stackedLabel>
            <Label>Last Name</Label>
            <Input
              onChangeText={(val) => handleSignupInputChange('lastName', val)}
            />
          </Item>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input
              onChangeText={(val) => handleSignupInputChange('eMail', val)}
            />
          </Item>
          <Item stackedLabel>
            <Label>Password</Label>
            <Input
              onChangeText={(val) => handleSignupInputChange('password', val)}
            />
          </Item>
          <Item stackedLabel>
            <Label>Confirm Password</Label>
            <Input
              onChangeText={(val) => handleSignupInputChange('coPassword', val)}
            />
          </Item>
        </Form>
        <Button
          full
          style={signupStyles.signupButton}
          onPress={submitSignupForm}>
          <Text>Signup</Text>
        </Button>
        {signupStatus.loading ? (
          <Text>...loading</Text>
        ) : signupStatus.error.length > 0 ? (
          <Text>{signupStatus.error}</Text>
        ) : (
          <Text>{signupStatus.registrationDetails}</Text>
        )}
      </Content>
    </Container>
  );
};

export default Signup;
