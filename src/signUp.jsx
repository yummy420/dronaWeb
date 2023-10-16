import React, { useState } from "react";
import { NavLink, useNavigate,Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
       
        // ...
        setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          userName,
          email,
        });
        navigate("/login")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div>
      <h1> Drona Aviation </h1>
      <form>
        <div>
          <label htmlFor="email-address">Email address</label> <br />
          <input
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="user-name">User Name</label> <br />
          <input
            type="text"
            label="user-name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="UserName"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>{" "}
        <br />
        <button type="submit" onClick={onSubmit}>
          Sign up
        </button>
      </form>
      <p style={{"color":"black"}}>
        Already have an account? <Link to="/login">Login</Link>{" "}
      </p>
    </div>
  );
};

export default Signup;
