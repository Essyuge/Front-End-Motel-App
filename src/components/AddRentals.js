import {useNavigate,useParams} from "react-router-dom";
import { useState } from "react";
import {WiDirectionLeft} from 'react-icons/wi'
  
function AddRentals({handleAdd}) {

    const{owner_id}=useParams()
  
    const [add, setadd] = useState({available:true,
     owner_id:parseInt(owner_id)
    });
    const navigate=useNavigate()
  
    function onchange(e){
      const { name, value } = e.target;
      setadd({
        ...add,
        [name]: value
      });
    
    }

    function handleSubmit(e){
        e.preventDefault()
       console.log(add)
       fetch('https://find-a-motel.herokuapp.com/rentals', {
    method: 'POST',
    body: JSON.stringify(
      add
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
    })
    .then(res=>res.json())
    .then(data=>{
      handleAdd(data)
      if(data.id===undefined){
       return navigate("/")
      }else
     return navigate(`/owner/${parseInt(owner_id)}/rentals`)
    })
          
      }
  