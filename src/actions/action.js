// Various redux actions for controlling state

export function updateEmail(email) {
  return {type: "UPDATE_EMAIL", payload: email}
}

export function toggleLogin(){
  return {type: "LOGIN_TOGGLE", payload:null}
}

export function toggleHelp(){
  return {type: "HELP_TOGGLE", payload:null}
}

export function clearState(){
  return {type: "CLEAR_STATE", payload:null}
}

export function storeDatasets(dataJson){
  return {type: "STORE_DATASETS", payload:dataJson}
}

export function storeUserDatasets(dataJson){
  return {type: "STORE_USER_DATASETS", payload:dataJson}
}

export function UpdateUserDatasets(userDataObj){
  return dispatch => {
    fetch("http://localhost:3000/api/v1/user_datasets/", {
      method: 'POST',
      body: JSON.stringify(userDataObj),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(json => {
      dispatch({type: "UPDATE_USER_DATASETS", payload:userDataObj})
    })
  }
}

// Async redux actions

export function setDoomIndexValues(){
  return dispatch => { fetch(`http://localhost:3000/api/v1/data_requests/${localStorage.id}`)
    .then(resp=>resp.json())
    .then(json=>{
      dispatch({type:"SET_DOOM_VALUES", payload: json})
  })
  }
}


export function getUserDatasets(){
  return dispatch => {  fetch(`http://localhost:3000/api/v1/user_datasets/${localStorage.id}`)
    .then(resp => {return resp.json()})
    .then(json => {
      dispatch({type:"GET_USER_DATASETS", payload: json})
    }
  )
  }
}
