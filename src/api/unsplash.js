
import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorisation: 'Client-ID fa1a24a762602f0abef749dd5d4309d5547d50d6229266774961d4be8a871863'
    }
});




