const defaultState = {
  key: "value"
}

function reducer(state = defaultState, action){
  switch (action.type) {
    case "ACTION_TYPE":
      return {...state, key: action.payload}
    default:
      return state
  }
}

export default reducer
