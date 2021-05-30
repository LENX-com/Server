import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {signup} from '../../../actions/index'

function Signup() {

    const [values, setValues]= useState ({
        name:'',
        email:'',
        password:'',
        error:'',
        success: false
    })

    const {name, email, password, success, error} = values

    const handleChange = name => event => {
        setValues({...values, error:false, [name]: event.target.value});
    }

    const clickSubmit = (event)=> {
        event.preventDefault();
        setValues({...values, error: false})
        signup ({name, email, password})
        .then( data => {
            console.log(data)
            if(data.error) {
                setValues({...values, error: data.error, success:false});
            } else {
                setValues({
                    ...values,
                    name: '',
                    email:'',
                    password: '',
                    error:'',
                    success: true                
                })
            }
        })
    };

    const signUpForm=() => (
        <form>
            <div className="form-group">
                <label className="text">Name</label>
                <input 
                onChange={handleChange('name')}
                type="text"
                className="form-control"
                value={name}

                />
            </div>

             <div className="form-group">
                <label className="text">E-mail</label>
                <input
                onChange={handleChange('email')}
                type="email"
                className="form-control"
                 value={email}
                
                />
            </div>
            
            <div className="form-group">
                <label className="text">Password</label>
                <input 
                onChange={handleChange('password')}
                type="password"
                className="form-control"
                 value={password}
                
                />
            </div>

            <button onClick={clickSubmit} className="button-submit">Submit</button>
        </form>
    );

    const showError= () => (
        <div className="alert-error" style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    )

     const showSuccess= () => (
        <div className="alert-error" style={{display: success ? '' : 'none'}}>
            <p> New account is created please <Link to ="/signin"> sign in </Link> </p>
        </div>
     )

    return (
         <>
            {showSuccess()}
            {showError()}
            {signUpForm()}

        </>
    )
}

export default Signup
