import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css';
import { useState } from "react/cjs/react.development";
import Modal from "../UI/Modal";

const AddUser = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const [error, setError] = useState();


    const newNameHandler = (e) => {
        setName(e.target.value);
    }

    const newAgeHandler = (e) => {
        setAge(e.target.value);
    }

    const userSubmitHandler = (e) => {
        e.preventDefault();

        if (name.trim().length === 0 || age.trim().length === 0 || +age.trim()[0]===0) {
            setError({
              title: "Date incomplete",
              message: "Introduceti numele complet si varsta",
            });
            return;
        }

        if (+age<1){
            setError({
                title: "Varsta incorecta",
                message: `Varsta utilizatorului trebuie sa fie minim 1 an!`,
              });
              return;
        }

        props.onSubmitHandler(name, age);

        setName('');
        setAge('');
    }


    const resolveErrorHandler = () => {
        setError(null);
    }


    return(
        <React.Fragment>
       {error && <Modal onResolveError={resolveErrorHandler} title={error.title} message={error.message}/>}
        <Card className={classes.input}>
            <form onSubmit={userSubmitHandler}>
                <label htmlFor="nume">Utilizator</label>
                <input value={name} onChange={newNameHandler} id='nume' type='text'/>
                <label htmlFor="age">Varsta</label>
                <input value={age} onChange={newAgeHandler} id='age' type='number'/>
                <Button type="submit">Adauga Utilizator</Button>
            </form>
        </Card>
        </React.Fragment>
    );
}

export default AddUser;