import React from 'react';
import { Link,Outlet } from 'react-router-dom';
function Profile(){
  return (
  <div className="container shadow mt-5" style={{height:"400px"}}>
    <div className='row  h-100 '>
    <div className='col-4 '>
        <div className='container h-100 d-flex flex-column justify-content-evenly align-items-center fs-5'>
            <div className='row'>
                <div className="col">
                <Link className='text-decoration-none' to="Personal">Personal Details
                </Link>
                </div>
            </div>
            <div className='row'>
                <div className="col">
                <Link  className='text-decoration-none' to="Professional">Professional Details
                </Link>
                </div>
            </div>
            <div className='row'>
                <div className="col">
                    <Link  className='text-decoration-none' to="Educational">Educational Details</Link>
                    </div>
            </div>
        </div>
    </div>
    <div className='col-8 '>
    <Outlet/>
    </div>

    </div>
  
  </div>
  )
}

export default Profile;
