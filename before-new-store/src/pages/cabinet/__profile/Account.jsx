import { useEffect } from 'react';

import { connect } from 'react-redux';

import TemplateAccount from 'components/template/TemplateAccount';
import RenderFormAccount from 'components/cabinet/forms/RenderFormAccount';

import {
  // getInfoAccountAction,
  saveInfoAccountAction
} from 'actions'


const Account = (props) => {

  /* получение данных пользователя */

  useEffect(() => {
    props.getInfoAccountAction();
  }, []);

  /* получение данных пользователя */

  /* сохранение данных пользователя */
  const onSubmitIn = () => {
    // console.log('save in account ', props.dataForm.values)
    props.saveInfoAccountAction(props.dataForm.values);
  }

  /* сохранение данных пользователя */



  return (
    <>
      {/* {console.log('render', props.getInfoAccount)} */}
      <TemplateAccount title="Учетная запись компании" >
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

  return {
    fieldCompanyAccount: state.fieldCompanyAccount, // база полей
    getInfoAccount: state.getInfoAccountReducer.getInfoAccount, // полученные данные с сервера
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps,
  {
    saveInfoAccountAction
  })(Account);