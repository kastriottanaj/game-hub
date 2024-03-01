import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",

    params: {
        key: "90bd29e77065406d9256c80f16ddd850"
    }
})