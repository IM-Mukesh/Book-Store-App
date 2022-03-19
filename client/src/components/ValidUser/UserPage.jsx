import React from 'react';
import DisplayBook from './DisplayBook';
import Sidebar from './Sidebar';
import './UserPage.css'

const UserPage = () => {
  return <div className='user-container'>
      <Sidebar />
      <DisplayBook />
  </div>;
};

export default UserPage;
