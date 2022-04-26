import React, { useEffect } from 'react'

import { connect } from 'react-redux';

import { fetchItem } from 'actions';

import ModuleForm from './ModuleForm'

const EditForm = (props) => {

  useEffect(() => {
    props.fetchItem()
  }, [])



  const onSubmit = (formValues) => {
    props.fetchItem()
  }


  console.log('render', props.usersData,)

  if (!props.usersData) {
    return <>Loading</>
  }

  return (
    <div className="content">
      EditForm
      <hr />
      <ModuleForm
        onSubmit={onSubmit}
        initialValues={props.usersData}
      />
    </div>
  )

}

const mapStateToProps = (state, ownProps) => {
  // console.log('state', state)

  return { usersData: state.itemsForms.userdata }
}

export default connect(mapStateToProps, { fetchItem })(EditForm)
