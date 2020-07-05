Learning react Hook 

https://www.youtube.com/watch?v=SXIfnNvYrZE

Simple name and email form, save to state and error. 
Provide Validation for wrong entry.


### Notice (Using new method to create forms)

1. useState - to initialize the state 
    `const [values, setValues] = useState({
        name: '',
        email: ''
    })`

2. setValues
    `        setValues({
            ...values, //Copies each key value pair value, email..password. 
            [e.target.name] : e.target.value
        });`

3. Use functions instead of class 

4. Learn how to make a custom reusable Hook called useForm.js
 