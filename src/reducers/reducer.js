const defaultState = {
  User: {id:null, token:null},
  LoggedIn: false,
}

function reducer(state = defaultState, action){
  switch (action.type) {
    case "UPDATE_EMAIL":
      let newUserEmail = {...state,
        User: {
          email: action.payload
        }
      }
      console.log(newUserEmail);
      return newUserEmail
    default:
      return state
  }
}

export default reducer
