import React from 'react'
import { formValues } from 'redux-form'

import { Field, reduxForm } from 'redux-form'


class ModuleForm extends React.Component {


  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <input
          placeholder={label}
          {...input}
        />
      </div>
    )
  }
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }




  render() {
    return (
      <div>
        ModuleForm
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field name="title" component={this.renderInput} label="title" />
          <Field name="description" component={this.renderInput} label="text" />
          <button className='btn'>send</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'testForm'
})(ModuleForm);
