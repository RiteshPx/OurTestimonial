import  './Card.css';
import { GiDoubleStreetLights } from "react-icons/gi";
export default function Card({review}){
  
return(
 <div className="card">
    <div >
        <div className='colr'></div>
        <img src={review.image} alt="superman"/>
    </div>
    <GiDoubleStreetLights  className='btn' />
    <div>
        <p className='name'>{review.name}</p>
        <p className='job'>{review.job}</p>
        <p className='text'>{review.text}</p>
    </div>
    <GiDoubleStreetLights  className='btn' />


 </div>    
)
}