import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/garden',
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json'
    }
})

export {instance}