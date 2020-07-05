import React, {Component, useState} from 'react';

const Form = () =>{
    const [values, setValues] = useState({email: "", password:""});

    const handleChange = e =>{
        console.log(e.target.name);
        console.log(e.target.value);
        setValues({
            ...values, //Copies each key value pair value, email..password. 
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();
        submit();
    };

    function submit(e){
        console.log("Submitted Successfully")
    }

    return(
        <form onSubmit={handleSubmit} noValidate> 
            <div>
            <label>Email:</label>
            <input type='email' name="email" onChange={handleChange} value={values.email} placeholder="Enter Name Here"/>
            </div>
            <div>
            <label>Password:</label>
            <input type='password' name="password" onChange={handleChange} value={values.password} placeholder="Enter Password Here"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;