import React, { useState} from "react";
//import { useState } from "react/cjs/react.development";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

const App = () => {

  const [users, setUsers] = useState([])


  const createNewUser = (thisName, thisAge) => {
    setUsers(prevState =>{
      return[...prevState, {name: thisName, age: thisAge}]
    })
  }

  return(
    <React.Fragment>
      <AddUser onSubmitHandler={createNewUser}/>
      <UsersList users = {users}/>
    </React.Fragment>
  );
}

export default App;