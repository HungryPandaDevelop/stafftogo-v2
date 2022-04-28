export const addCashActionIn = (cash) => {
  return (dispatch) =>{
    dispatch({ type: "ADD_CASH", payload: cash})
  }
}