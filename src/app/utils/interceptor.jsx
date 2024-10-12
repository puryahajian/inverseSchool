import axios from "axios";

const interceptor = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
    },
})

export default interceptor;