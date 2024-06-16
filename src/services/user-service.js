import { myAxios } from "./helper";

export const signup=async (user)=>{
    const response = await myAxios.post('/api/v1/auth/register', user);
    return response.data;
}

export const login=async (loginDetails)=>{
    const response=await myAxios.post('/api/v1/auth/login',loginDetails);
    return response.data;
}
