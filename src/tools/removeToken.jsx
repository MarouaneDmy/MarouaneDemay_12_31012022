import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

export default async function removeToken(){
    /* const foundData = await axios("http://localhost:3001/api/v1/user")
    return foundData */
    return axios
        .post("/profile", {
            
        })
        .then(() => {
            const token = localStorage.removeItem("token")
            return token
        })
        .catch((error) => {
            console.log(error.message)
        });
}