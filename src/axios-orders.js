import axios from 'axios';
// put firebase url here
const instance = axios.create({
    baseURL: "https://react-my-burger-3d82d.firebaseio.com/"
})


export default instance;