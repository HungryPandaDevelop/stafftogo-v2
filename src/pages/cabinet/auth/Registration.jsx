import RenderFormAccount from 'components/cabinet/forms/RenderFormAccount';

import { connect } from 'react-redux';

import { registrationAccount } from 'actions';

const Registration = (props) => {

  const onSubmitIn = () => {

    props.registrationAccount(props.formData);
  }

  return (
    <>

      <div className="content">

        <div className="main-full">
          <h1>Регистрация</h1>
          <RenderFormAccount
            btnSaveText="Регистрация"
            objFields={props.fieldRegistration}
            orderFields={props.fieldRegistration.order}
            onSubmitProps={onSubmitIn}
          />
        </div>
      </div>

    </>
  )
}

const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  // console.log(formReducer)

  return {
    fieldRegistration: state.fieldRegistration, // база полей
    formData: formReducer,
  }
}

export default connect(mapStateToProps, { registrationAccount })(Registration);
