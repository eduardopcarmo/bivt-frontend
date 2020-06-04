import {combineReducers} from 'redux';
import bootstrapReducer from './authentication/bootstrap/bootstrapRedurer';
import signupReducer from './authentication/signup/signupReducer';
import loginReducer from './authentication/login/loginReducer';
import createCirlceReducer from './circle/createCircle/createCirlceReducer';
import inviteToCirlceReducer from './circle/inviteToCircle/inviteToCirlceReducer';
import choosePluginReducer from './managePlugin/choosePlugin/choosePluginReducer';
const rootReducer = combineReducers({
  bootstrap: bootstrapReducer,
  signup: signupReducer,
  login: loginReducer,
  forgotPassword: loginReducer,
  createCircle: createCirlceReducer,
  inviteToCircle: inviteToCirlceReducer,
  choosePlugin: choosePluginReducer,
});

export default rootReducer;
