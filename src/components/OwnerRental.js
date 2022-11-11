import {useParams,Link,useNavigate} from 'react-router-dom'


function OwnerRental({rentals,handleDelete}) {
  

const {id}=useParams()
const navigate=useNavigate()



function handleRemove(id) {
  fetch('https://find-a-motel.herokuapp.com/rentals/' + parseInt(id), {
    method: 'DELETE',
})
.then((r) => r.json())
.then((deleted) =>handleDelete(id) )

}
