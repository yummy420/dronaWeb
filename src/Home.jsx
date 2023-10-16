import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { Navigate, useNavigate } from "react-router-dom";
import {
  collection,
  getDoc,
  query,
  where,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  serverTimestamp,
  
} from "firebase/firestore";

export default function Home() {
    const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [rAge, setrAge] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      //   console.log(user);
    });
    return () => {
      unsub();
    };
  }, []);
  const lol = {
    age: 30,
  };
  const [dummyage,setDummyAge]=useState('');
  const handleretrieve = async () => {
    setLoading(true);
    const docRef = doc(db, "users", user.uid);
    setDoc(docRef, { age: rAge }, { merge: true });
    console.log(docRef);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    setEmail(data.email)
    setUserName(data.userName)
    setDummyAge(data.age);
    setLoading(false)
  };
   const handleLogout =()=>{
    signOut(auth);
    navigate("/login");
   }
  return (
    <div>
      <button onClick={handleLogout}>Logut</button>
      <h1>Your Username is: <span style={{color:"green"}}> {loading===true?"Reteieving":userName} </span> </h1>
      <h1>Your email is:  <span style={{color:"green"}}>{loading===true? "Retrieving":email}</span></h1>
      <label htmlFor="enter age ">Enter Age</label> <br />
          <input
            type="text"
            label="enter age"
            value={rAge}
            onChange={(e) => setrAge(e.target.value)}
            required
            placeholder="Age"
          />
      <button onClick={handleretrieve}>Retrieve Data</button>
      <h3>After updating and Retrieving</h3>
      <h1>Your Age is:  <span style={{color:"green"}}>{loading===true? "Retrieving":dummyage}</span></h1>
    </div>
  );
}
