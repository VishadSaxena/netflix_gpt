import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, PROFILE_PIC } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const SignOutHandler = () => {
    signOut(auth).then(() => {        // On click btn => Sign-out successful as auth changed.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    

  }

  
  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {        // API called whenever Auth changes (Event Listener type) Whenever User State changes
    if (user) { // Signed In / Signed Up user
      const {uid, email, displayName, photoURL} = user;
      
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      navigate("/browse");
    } else {
      
      dispatch(removeUser());  // User is signed out
      navigate("/");
      
    }
  });

  return () => unsubscribe(); // Unsubscribe when component unmounts
}, []);

const handleGptSearch = () => {
  dispatch(toggleGptSearch());
}

  return (
    <div className="ml-[5 rem] pl-[12rem] pr-[4rem] py-3 absolute bg-gradient-to-b from-black z-10 w-full flex justify-between">
        <img className="w-44 " src={NETFLIX_LOGO} alt="logo" />
        {user && <div className="flex w-30 h-18 py-3">
          <button className="mx-4 my-2 p-4 bg-purple-800 text-white rounded-lg" onClick={handleGptSearch}>GptSearch</button>
          <img alt="Display-Pic" src= {PROFILE_PIC} />
          <button className="p-1 font-bold text-white" onClick={SignOutHandler}>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header