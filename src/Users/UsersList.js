import Card from "../UI/Card";
import React from "react";
import {v4} from 'uuid';

import classes from './UsersList.module.css';

const UsersList = (props) => {

   
    
    return(
        <Card className={classes.users}>
            <ul>
                {props.users.map(user=>(
                    <li key={v4()}>{user.name} are varsta de {user.age} ani!</li>
                ))}
            </ul>
        </Card>    
    );
}

export default UsersList;