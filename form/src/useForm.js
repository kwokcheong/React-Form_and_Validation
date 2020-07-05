//Custom hook for forms. Always say use(...).js

import {useState} from 'react';

const useForm = () =>{
    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const handleChange = e =>{
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
     const handleSubmit = e =>{
        e.preventDefault();
        this.setState({
          haveSubmit : true
        })
        console.log("Submitted");
      }
}