import streams from "../apis/streams";
import history from "../history";

export const createStream = (formValues) =>
  async (dispatch) => {
    const response = await streams.post('/streams', formValues);
    console.log(response)
    dispatch({type: "CREATE_STREAM", payload: response.data });
    history.push('/')
  };

export const fetchStreams = () => async dispatch => {
  
  const response = await streams.get('/streams');

  dispatch({type: "FETCH_STREAMS", payload: response.data })
};

export const getItem = (id) => async dispatch => {
  const itemEl = await streams.get(`/streams/${id}`);
  dispatch({type: "GET_ITEM", payload: itemEl})
}

export const fetchStream = (id) => async dispatch => {
 
  const response = await streams.get(`/streams/${id}`);
  console.log('fetchStreams',id, response.data);
  dispatch({type: "FETCH_STREAM", payload: response.data })
};


export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({type: "EDIT_STREAM", payload: response.data })
  history.push('/')
};


export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({type: "DELETE_STREAM", payload: id })
};
