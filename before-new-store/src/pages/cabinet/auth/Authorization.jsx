import RenderFormAccount from 'components/cabinet/forms/RenderFormAccount';

import { connect } from 'react-redux';

import { authAccount } from 'actions';


import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import OAuth from 'components/cabinet/OAuth';

const Authorization = (props) => {

  const onSubmitIn = () => {
    props.authAccount(props.formData);
  }

  return (
    <>
      <div className="content">
        <div className="main-grid">
          <div className="col-5">
            <h1>Авторизация</h1>
            <RenderFormAccount
              btnSaveText="Авторизация"
              objFields={props.fieldAuthorization}
              orderFields={props.fieldAuthorization.order}
              onSubmitProps={onSubmitIn}
            />
            <Link to="/forgot-password">Восстановить пароль</Link>
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            <OAuth />
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  // console.log(formReducer)

  return {
    fieldAuthorization: state.fieldAuthorization, // база полей
    formData: formReducer,
  }
}

export default connect(mapStateToProps, { authAccount })(Authorization);