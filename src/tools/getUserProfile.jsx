import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3001/api/v1/user";
/* axios.defaults.headers.common = {
    "Authorization": `Bearer ${localStorage.getItem("token")}`
} */
console.log(axios.defaults.headers.common)
export default async function getUserProfile(token){
    console.log(localStorage.getItem("token"))
    let config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return axios
        .post("/profile", {

        }, config)
        .then((response) => {
            const user = response.data.body
            console.log(user)
            return user
        })
        .catch((error) => {
            console.log(error.message)
        });
}