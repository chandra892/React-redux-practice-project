import React, { useState } from 'react';
import './User.css'
import { userService } from '../services/userService';
import Users from '../users/Users';


const User = () => {
  const [users, setUsers] = useState([]);
  const getUserData=()=>{
    let userDataList = userService();
    userDataList.then((res)=>{
      console.log(res.data.results);
      setUsers(res.data.results)
    })
    .catch((error)=>{
      console.log(error);
      alert("fetching failed");
    })
  }
  
      
  return (
    <>
        <div className='usres-list'>
          <h1>Users List</h1>
          <p><b>Username</b>: John Doe</p>
          <p><b>Email</b>: johndoe@example.com</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur enim expedita perferendis nostrum aspernatur! Pariatur inventore natus aperiam nesciunt eveniet ipsam tempora autem, ad repellendus necessitatibus asperiores enim qui!
           cupiditate tempore et reiciendis mollitia perspiciatis aspernatur at dolorum. Tenetur totam nam pariatur ducimus sequi. Repudiandae dolor architecto ratione suscipit totam possimus? Eos inventore earum corrupti commodi dolor!</p>
              <button onClick={getUserData}>getUsers</button>
          
        </div> 
 {/* try to implement three radio buutons  */}
        <div>
          <input type="radio" />
          <label htmlFor="">ALL</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">MALE</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">FEMALE</label>
        </div>
            {/* -------------------------------------------- */}
          <div className='user-card'>
            {
              users.map((ele, index)=>{
                return <Users  user = {ele} />
              }) 
            }
            
            </div>
            
    </>
  )
}
export default User