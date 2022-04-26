import { useEffect } from 'react';

import { connect } from 'react-redux';

import TemplateAccount from 'components/template/TemplateAccount';
import RenderFormAccount from 'components/cabinet/forms/RenderFormAccount';

import { useParams } from 'react-router-dom';

import {
  getInfoVacanciesAction,
  saveInfoVacanciesAction
} from 'actions'


const VacanciesEdit = (props) => {

  const params = useParams();

  // console.log('params.elementId', params.elementId)
  /* получение данных пользователя */

  useEffect(() => {
    props.getInfoVacanciesAction(params.elementId);
  }, []);

  /* получение данных пользователя */

  /* сохранение данных пользователя */
  const onSubmitIn = () => {
    // console.log('save in account ', props.dataForm.values)
    props.saveInfoVacanciesAction(props.dataForm.values, params.elementId);
  }

  /* сохранение данных пользователя */



  return (
    <>

      <TemplateAccount title="Редкатировать вакансию" >
        <RenderFormAccount
          btnSaveText="Сохранить изменения"
          objFields={props.fieldCompanyAccount}
          orderFields={props.fieldCompanyAccount.order}
          initialValues={props.getInfoAccount ? props.getInfoAccount : null}
          onSubmitProps={onSubmitIn}
        />
      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;

  console.log('state', state)
  return {
    fieldCompanyAccount: state.fieldVacancies, // база полей
    getInfoAccount: state.getInfoAccountReducer.getInfoVacancies, // полученные данные с сервера
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps,
  {
    getInfoVacanciesAction,
    saveInfoVacanciesAction
  })(VacanciesEdit);