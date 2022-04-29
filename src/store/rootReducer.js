
import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';


import fieldsAuthorization from 'store/reducers/base/fieldsAuthorization';
import fieldsRegistration from 'store/reducers/base/fieldsRegistration';
import fieldsEmployersAccount from 'store/reducers/base/fieldsEmployersAccount';

import infoAccountReducer from "./reducers/infoAccountReducer";

const rootReducer = combineReducers({
  form: formReducer,
  fieldsAuthorization: fieldsAuthorization,
  fieldsRegistration: fieldsRegistration,
  fieldsEmployersAccount: fieldsEmployersAccount,
  accountInfo: infoAccountReducer
});

export default rootReducer;
