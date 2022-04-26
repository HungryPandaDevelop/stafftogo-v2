import React from 'react'

import { connect } from 'react-redux';

import { createItem } from 'actions';

import ModuleForm from './ModuleForm'

class TestForm extends React.Component {


  onSubmit = (formValues) => {
    console.log(formValues)

    this.props.createItem(formValues)

    console.log(this.props)
  }

  render() {
    return (
      <div className="content">
        TestForm
        <hr />
        <ModuleForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, { createItem })(TestForm)
