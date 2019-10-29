import React from 'react';

import './App.css';


const UserCard = (props) => {
  
    return(

        <div className="cardholder">
            <div className='card1'>
                <h1>{props.userC.name}</h1>
                <img className='img1' src={props.userC.avatar_url} alt='user Image'/>
                <h4>{props.userC.bio}</h4>

            </div>


            <div className='followers'>
                
                <h1>Followers</h1>

                {props.followersC.map(follower =>
                    <div className='card2' key={follower.id}>
                        <h1>{follower.login}</h1>
                        <img className='img2' src={follower.avatar_url} alt='user Image'/>
                    </div> 
                     )}
            </div>
        </div>

    )
}

export default UserCard;