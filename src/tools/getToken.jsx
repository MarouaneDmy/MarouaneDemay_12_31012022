import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

export default async function getToken(email, password){
    /* const foundData = await axios("http://localhost:3001/api/v1/user")
    return foundData */
    return axios
        .post("/login", {
            email,
            password
        })
        .then((response) => {
            localStorage.setItem("token", response.data.body.token)
            const token = localStorage.getItem("token")
            return token
        })
        .catch((error) => {
            console.log(error.message)
        });
}