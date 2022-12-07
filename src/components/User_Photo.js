import React from 'react';
import '../stylesheets/Header_User.css';

const User_Photo = () => {
  return (
        <div className='foto-perfil-usuario'>
            <img 
              className='foto-perfil'
              src={require('../images/default_user_image.png')}
              alt='Foto de perfil del usuario'
            />
        </div>
  );
}

export default User_Photo;