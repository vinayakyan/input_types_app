import axios from 'axios';
let url = "http://localhost:3003/user"
export const allUsers = () =>{
    return axios.get(url)
}

export const addUserAPI = (userData) =>{
    return axios.post(url,userData)
}

export const deleteUserAPI = (id) =>{
    return axios.delete(url+"/"+id)
}

export const getUserAPI = (id) =>{
    return axios.get(url+"/"+id)
}

export const updateUserAPI = (userData) =>{
    return axios.put(url+"/"+userData.id,userData)
}