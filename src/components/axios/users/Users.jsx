import React from 'react';
import './Users.css'

const Users = ({user}) => {
  return (
    <div className='cardUser'>
      <img src={user.picture.medium}  width={"100%"} height={"200"} alt="no-ing" />
      <h3>{user.name.first}{user.name.last}</h3>
      <p>{user.gender}</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, iste! Aperiam dignissimos</p>
      <button>User Details</button>
      
    </div>
  )
}

export default Users