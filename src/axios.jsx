import axios from 'axios'

export const API_KEY = "563492ad6f917000010000012a16e098bf4c44cdb78882ba83cc35d0";

const instance = axios.create({
    baseURL:"https://api.pexels.com/v1"
})

export default instance ;
