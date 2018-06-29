export function updateEmail(email) {
  // debugger
  return {type: "UPDATE_EMAIL", payload: email}
}

export function toggleLogin(){
  return {type: "LOGIN_TOGGLE", payload:null}
}
