import axios from "axios";


export function userService() {
    let userList = axios.get("https://randomuser.me/api/?results=3");

    return userList;
    
}

