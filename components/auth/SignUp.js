import { useState } from "react";
export default function SignUp(){
    const[details,setDetails] = useState({
        email:'',
        password:'',
        confirmPassword: ''
    });

    const[Error, setError] = useState ({
        email:false,
        password:false,
        confirmPassword: false
      });

      function handleDetails(key,value){
        setDetails(prevInput =>({
            ...prevInput,
            [key]:value
        }));
        setError(prevValid=>({
          ...prevValid,
          [key]:false
        }));
      };
      function handleError(key){
        setError(prevValid=>({
          ...prevValid,
          [key]:true
        }));
      }
      const EmailValid = Error.email && !details.email.includes('@');
      const passwordConfirm = Error.password && details.password !== details.confirmPassword;

    function handleSubmit (event){
        event.preventDefault();

        const formDataValue = new FormData (event.target);
        const data = Object.fromEntries(formDataValue.entries());

        const acquisitionCh = formDataValue.getAll('acquisition');
        console.log(data);
        console.log(acquisitionCh);

    }
    return(
        <center>
        <form  id="login-form" onSubmit={handleSubmit}>
            <h2 className="text-1000 fs-3 fw-bold ms-2 text-gradient">Welcome to the Page !</h2>
            <div className="control no-margin">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"
                onChange={(event) => handleDetails('email',event.target.value)} 
                onBlur={(event)=> handleError('email')}
                />
                {EmailValid == false ? ' ':<p>Please enter valid email</p>}
            </div>
            
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"
                    />   
                </div>
                <div className="control no-margin">
                    <label htmlFor="Confirm-password">Confirm Password</label>
                    <input type="password" id="ConfirmPassword" name="ConfirmPassword"
                    onChange={(event) => handleDetails('password',event.target.value)}
                    onBlur={(event)=> handleError('password')}
                    />
                    {passwordConfirm == false ? ' ':<p>Please enter confirm password</p>}
                </div>
            </div>
        <hr/>

        <div className="control-row">
            <div className="control no-margin">
                <label htmlFor="First-Name">First-Name</label>
                <input type="type" id="first-name" name="FirstName"
                />
            </div>
            <div className="control no-margin">
                <label htmlFor="Last-Name">Last-Name</label>
                <input type="type" id="last-name" name="LastName"
                />
           </div>
        </div>  
        <p className="form-actions">
           <button className="btn btn-white shadow-warning text-warning">Submit</button>
        </p>
        </form>
    </center>
    );
} 