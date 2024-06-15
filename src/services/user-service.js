import { myAxios } from "./helper";

export const signup=async (user)=>{
    const response = await myAxios.post('/api/v1/auth/register', user);
    return response.data;
}
