const defaultState = {
  //User: {id:null, token:null},
  LoggedIn: false,
  Datasets: null,
  UserDatasets: [],
}

function reducer(state = defaultState, action){
  switch (action.type) {
    // case "UPDATE_EMAIL":
    //   let newUserEmail = {...state,
    //     User: {
    //       email: action.payload
    //     }
    //   }
    //   console.log(newUserEmail);
    //   return newUserEmail
    case "LOGIN_TOGGLE":
      return {...state, LoggedIn:!state.LoggedIn}

    case "STORE_DATASETS":
      return {...state, Datasets:action.payload}

    case "STORE_USER_DATASETS":
      return {...state, UserDatasets:action.payload}

    // this works because on state reset the dataset is re-fetched
    case "UPDATE_USER_DATASETS":
      return state

    default:
      return state
  }
}

export default reducer
