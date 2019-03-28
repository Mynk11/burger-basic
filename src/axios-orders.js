import axios from 'axios';
// put firebase url here
const instance = axios.create({
    baseURL: ""
})


export default instance;