export const removeCustomerActionIn = (customer) => {
  return (dispatch) =>{
    dispatch({ type: "REMOVE_CUSTOMER", payload: customer})
  }
}