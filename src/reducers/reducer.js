const defaultState = {
  //User: {id:null, token:null},
  LoggedIn: false,
  Datasets: null,
  UserDatasets: null,
  doomIndexData: null,
  updated: false
}

function reducer(state = defaultState, action){
  console.log(action.type);
  switch (action.type) {
    case "LOGIN_TOGGLE":
      return {...state, LoggedIn:!state.LoggedIn}

    case "STORE_DATASETS":
      return {...state, Datasets:action.payload}

    case "STORE_USER_DATASETS":
      return {...state, UserDatasets:action.payload}

    // this works because on state reset the dataset is re-fetched
    case "UPDATE_USER_DATASETS":
      return {...state, updated: !state.updated}

    case "SET_DOOM_VALUES":
      return {...state, doomIndexData:action.payload}

    case "GET_USER_DATASETS":
      return {...state, UserDatasets:action.payload}

    default:
      return state
  }
}

export default reducer
