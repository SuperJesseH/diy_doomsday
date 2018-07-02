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

export function UpdateUserDatasets(userDataObj, currentValue){
  userDataObj.weight = currentValue
    fetch("http://localhost:3000/api/v1/user_datasets/", {
      method: 'POST',
      body: JSON.stringify(userDataObj),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    return {type: "UPDATE_USER_DATASETS", payload:userDataObj}
}
