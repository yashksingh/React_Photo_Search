import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID vUj1988qot6pRQ2Yuaqk8qv5d9n70Vbyzpyv9CkbIoo' 
    }
});

 