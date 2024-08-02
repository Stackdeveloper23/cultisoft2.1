import { useEffect, useState } from 'react';

const UserName = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtén los datos del usuario de localStorage
    const getUser =()=>{
      const userString = sessionStorage.getItem('user')
      const user = JSON.parse(userString)
      return user;
  }

  const userData = getUser();
  setUser(userData);
   }, []);
   
  return (
    <div>
      {user ? (
        <button className='btn btn-success'>Welcome, {user.name}!</button>
     
    ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserName;
