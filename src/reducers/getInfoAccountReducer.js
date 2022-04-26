export default (state={}, action) => {
  switch(action.type){
    case 'GET_INFO_ACCOUNT':
      return {...state, 'getInfoAccount': action.payload}
    case 'UPDATE_FORM':
      return {...state, 'getInfoAccount': action.data}
    case 'GET_INFO_VACANCIES':
      return {...state, 'getInfoVacancies': action.payload}
    case 'FETCH_IMAGES':
      return {...state, 'getInfoAccount': action.data}
    default: 
      return state
  }
}