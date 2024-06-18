// import { instance } from './ApiInstance';

import axios from "axios";


// export const AllProdcuts = async () => {
//     try{
//         const response = await instance.get('/garden')
//         console.log(response);
//         return response
//     }
//     catch(e){
//         console.error(e);
    
//     }
// }

export const AllProdcuts= async () => {
    try{
        const response = await axios.get('http://localhost:3000/garden')
        console.log(response.data);
        return response.data
    }
    catch(e){
        console.error(e);
    }
}
