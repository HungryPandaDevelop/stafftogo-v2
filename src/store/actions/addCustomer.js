export const addCustomerActionIn = (customer) => {
  return (dispatch) =>{
    dispatch({ type: "ADD_CUSTOMER", payload: customer})
  }
}