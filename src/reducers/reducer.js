const defaultState = {
  //User: {id:null, token:null},
  LoggedIn: false,
  Datasets: null,
  UserDatasets: null,
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
      console.log('HI IM TOGGLEING STATE');
      return {...state, LoggedIn:!state.LoggedIn}
    case "STORE_DATASETS":
      console.log('HI IM Storeing datasets');
      return {...state, Datasets:action.payload}
    case "STORE_USER_DATASETS":
      console.log('HI IM Storeing User datasets');
      return {...state, UserDatasets:action.payload}
    default:
      return state
  }
}

export default reducer
