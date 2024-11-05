import React from 'react';
import { Link , Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
        <h1 className='text-center'>Profile</h1>
        <p className='text-center'>This is a profile page.</p>

        <div className='container text-balck mt-5 shadow' style={{height:"300px"}}>
            <div className="row h-100">
                <div className="col-4 bg-black">
                    <div className="container d-flex flex-column justify-content-evenly bg- h-100 ">
                        <div className="row">
                            <div className="col-12">
                                <Link to="personal" className='text-white  text-decoration-none '> Personal details</Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <Link to="work" className='text-white text-decoration-none'>Work Experience</Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <Link to="educational" className='text-white text-decoration-none' >Educational details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 text-black text-center"> 
                    <Outlet />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile