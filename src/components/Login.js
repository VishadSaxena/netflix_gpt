import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkSignUpData, checkValidData} from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const ValidateData = () => { // Validation function
    if(SignInForm) 
    { 
      const message = checkValidData(email.current.value,password.current.value); // Validation for Sign In 
      setErrorMessage(message);
      if(message) return ;  // Return as Validation was wrong no need to Authenticate
    } 
    else
     {
       const message = checkSignUpData(fullName.current.value,email.current.value,password.current.value); // Validation for Sign Up
      setErrorMessage(message);
      if(message) return ;  // Return as Validation was wrong no need to Authenticate
    }

               // Authentication Logic

    if(!SignInForm) { // Sign Up Authentication
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
      // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMessage(errorCode + " " + errorMessage);
      });
    }
    else
    {    // Sign In Authentication
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMessage(errorCode + " " + errorMessage);
      });
    }
  }

  const toggleSignInForm = () => {
    setSignInForm(!SignInForm);
    //console.log(SignInForm);
  }
  return (
    <div>
        <Header/>
        <div className="absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Background" />
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-90">
            <h1 className="font-bold text-3xl py-4">{(SignInForm) ? "Sign In" : "Sign Up"}</h1>
            {(!SignInForm) && <input ref={fullName} className="w-full p-4 my-4 bg-gray-700" type="text" placeholder="Full Name" />}
            <input ref={email} className="w-full p-4 my-4 bg-gray-700" type="text" placeholder="Email or mobile number" />
            <input ref={password} className="w-full p-4 my-4 bg-gray-700" type="password" placeholder="Password" />
            <button className="w-full p-4 my-6 bg-red-700 rounded-lg" onClick={ValidateData}>{(SignInForm) ? "Sign In" : "Sign Up"}</button>
            <p className="text-red-800 font-bold text-lg py-2">{errorMessage}</p>
            {(SignInForm) ? <p> New to Netflix?<span className="cursor-pointer" onClick={toggleSignInForm} > Sign Up Now. </span></p> : 
            <p>Already registered?<span className="cursor-pointer" onClick={toggleSignInForm}> Sign In Now. </span></p>}
        </form>
    </div>
  )
}

export default Login