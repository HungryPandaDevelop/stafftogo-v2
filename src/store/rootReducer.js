
import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';

import cashReducer  from 'store/reducers/cashReducer';
import customerReducer  from 'store/reducers/customerReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  form: formReducer,
});

export default rootReducer;
