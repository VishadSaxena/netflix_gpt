import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const SignOutHandler = () => {
    signOut(auth).then(() => {        // On click btn => Sign-out successful.
      
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    

  }

  
  useEffect( () => {
    onAuthStateChanged(auth, (user) => {        // API called whenever Auth changes (Event Listener type) Whenever User State changes
    if (user) { // Signed In / Signed Up user
      const {uid, email, displayName, photoURL} = user;
      
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      navigate("/browse");
    } else {
      
      dispatch(removeUser());  // User is signed out
      navigate("/");
      
    }
  });
}, []);

  return (
    <div className="ml-[5 rem] pl-[12rem] pr-[4rem] py-3 absolute bg-gradient-to-t from-black z-10 w-full flex justify-between">
        <img className="w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        {user && <div className="flex w-30 h-18 py-3">
          <img alt="Display-Pic" src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaSDR-kTPhPYcVVGSsV0jC3D-Q5HZSFE6fjzAM-4cMpltx1Gw9AV7OTnL8sYnC6CBxOBZQEAJLjStt822uD2lctOvNR05qM.png?r=962"/>
          <button className="p-1 font-bold text-black" onClick={SignOutHandler}>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header