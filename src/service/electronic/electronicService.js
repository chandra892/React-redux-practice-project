import axios from "axios";

export function electronicService(){
    // axios....... code 
    // let electrnics = axios.get('http://localhost:3000/categories_electronics');
    //  return electrnics;

    return axios.get("http://localhost:3000/categories_electronics")

}