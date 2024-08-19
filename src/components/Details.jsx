import React, { useState } from 'react';

const Details = () => {
  const [user, setUser] = useState({ name: 'No Name', age: 0 });

//   function changeName(e) {
//     setUser(prevState => ({
//       ...prevState,
//       name: e.target.value
//     }));
//   }

//   function changeAge(e) {
//     setUser(prevState => ({
//       ...prevState,
//       age: e.target.value
//     }));
//   }
function changeHandle(e){
    setUser({...user,[e.target.name]:e.target.value});
}

  return (
    <div>
      <form action="">
        <h2>{user.name}, {user.age}</h2>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name='name'
          placeholder="Enter User Name"
          value={user.name}
          onChange={changeHandle}
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name='age'
          id="age"
          placeholder="Enter User Age"
          value={user.age}
          onChange={changeHandle}
        />
      </form>
    </div>
  );
}

export default Details;
