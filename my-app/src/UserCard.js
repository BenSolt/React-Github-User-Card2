import React from 'react';

import './App.css';


const UserCard = (props) => {
  
    return(

        <div className="cardholder">
            <div className='card'>
                <h1>User</h1>
                {/* {props.userC.} */}
                <img>image </img>
                <h2>Bio</h2>

            </div>


            <div className='followers'>
                <h1>Followers</h1>

            </div>

        </div>

    )
}

export default UserCard;