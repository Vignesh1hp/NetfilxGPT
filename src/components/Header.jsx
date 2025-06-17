import { onAuthStateChanged, signOut } from "firebase/auth";
// import userIcon from "/netflix.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // signout Logic below...
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () =>{
    //toggle GPT search
    dispatch(toggleGptSearchView())
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      {/* Netflix logo */}
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {/* if only user exist render the user icon and sign out button */}
      {user && (
        <div className="flex items-center p-2">
          <button onClick={handleGptSearchClick} className="py-2 px-4 my-2 mx-4 bg-purple-600 text-white rounded-lg hover:bg-purple-400">GPT Search</button>
          <img className="w-9 h-9 mr-1" src={user?.photoURL} alt="user icon" />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
