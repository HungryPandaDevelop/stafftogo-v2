export const removeCashActionIn = (cash) => {
  return (dispatch) =>{
    dispatch({ type: "REMOVE_CASH", payload: cash})
  }
}