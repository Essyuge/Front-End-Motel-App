import {Link,useNavigate} from "react-router-dom";
import { useState } from "react";


function Signup() {
const [signUp, setSignUp] = useState({});
const navigate=useNavigate()

function onchange(e){
  const { name, value } = e.target;
  setSignUp({
    ...signUp,
    [name]: value
  });

}