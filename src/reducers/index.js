import { combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import getInfoAccountReducer from './getInfoAccountReducer';

import fieldCompanyAccount from './fieldCompanyAccount';

import fieldRegistration from './fieldRegistration';
import fieldAuthorization from './fieldAuthorization';

import fieldVacancies from './fieldVacancies';

const allReducers = combineReducers({
  fieldCompanyAccount: fieldCompanyAccount, // Все инпуты для формы
  fieldVacancies:fieldVacancies, 
  fieldRegistration: fieldRegistration, // Поля регистрации
  fieldAuthorization: fieldAuthorization, // Поля авторизации
  form: formReducer, // redux form 
  getInfoAccountReducer: getInfoAccountReducer, // Получение данных пользователя

});

export default allReducers;