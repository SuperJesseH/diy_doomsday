export function updateEmail(email) {
  // debugger
  return {type: "UPDATE_EMAIL", payload: email}
}

export function toggleLogin(){
  return {type: "LOGIN_TOGGLE", payload:null}
}

export function storeDatasets(dataJson){
  return {type: "STORE_DATASETS", payload:dataJson}
}

export function storeUserDatasets(dataJson){
  return {type: "STORE_USER_DATASETS", payload:dataJson}
}
