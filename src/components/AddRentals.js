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