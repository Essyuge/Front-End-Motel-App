import {Link,useNavigate} from "react-router-dom";




function Login() {

const navigate=useNavigate()
   
function handleUser(e){
  e.preventDefault()
const email=e.target.email.value
fetch(`https://find-a-motel.herokuapp.com/login/${email}`)
.then(res=>{
 if(!res.ok){
 return navigate("/signup")
 }
 return  res.json()
 })
.then(data=>{
  
  navigate(`/owner/${data.id}/rentals`)})

}