import React from 'react'

export const isLoggedin=()=>{
    let data=localStorage.getItem("data")
    if(data==null){
        return false;
    }
    else{
        return true;
    }
}

export const doLogin=(data,next)=> {
  localStorage.setItem("data",JSON.stringify(data))
  next()
}

export const doLogout=(next)=>{
    localStorage.removeItem("data")
    next()
}

export const getCurrentUserDetails=()=>{
    if(isLoggedin) return JSON.parse(localStorage.getItem("data").user)
        else return false
}