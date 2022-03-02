import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

export default async function editUsers(firstName, lastName) {
    const token = localStorage.getItem("token");
    let config = {
        headers: { Authorization: `Bearer ${token}` },
    }
    return axios
        .put("/profile", {
            firstName,
            lastName
        }, config)
        .then((response) => {
            const user = response.data.body
            console.log(response)
            return user
        })
        .catch((error) => {
            console.log(error.message)
        });
};