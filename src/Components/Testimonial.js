import './Testimonial.css';
import Card from './Card';
import {useState} from 'react';
import { TfiHandPointLeft ,TfiHandPointRight} from "react-icons/tfi";


export default function Testimonial(props){
    let reviews= props.data;
    const [count,setcount]= useState(0);
    function LeftHandler(){
        if(count-1 < 0){
            setcount(reviews.length-1)
        }
        else{
            setcount(count-1);
        }
    }
    function RightHandler(){
       if(count+1>= reviews.length){
        setcount(0);
       }
       else{
        setcount(count+1);
       }
    }


    return(
        <div>
           <div className='term'>
              <Card review={reviews[count]}/>
           </div>        
           <div>
               <button  className='btn' onClick={LeftHandler}><TfiHandPointLeft /></button>
               <button  className='btn' onClick={RightHandler}><TfiHandPointRight/></button>
           </div>
           <div >
              <button className='surprise'>Surprise Me</button>
           </div>
         </div>
    )
}