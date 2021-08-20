import React ,{useEffect,useState}from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import "./product.css"
function Products() {
    const history = useHistory()
const [data, setdata] = useState('')
useEffect(()=>{
    axios.get("https://fakestoreapi.com/products?limit=20").then((res)=>{
        setdata(res.data)
        console.log(res.data)
    }).catch((err)=>{
        console.log(err)
    })
},[])

const View =(id)=>{
    history.push(`/view/${id}`)
   }

    return (
        <div>
            <Navbar/>
            <div className='allitem'>
         
       {
           data? <div className ='products'>
       { data.map((item,index)=>{

     return  <div key={index} className="cards" onClick={()=>View(item.id)}>   
             <img src={item.image} alt="" />
                 <h6 id='title' >{item.title}</h6>
             <div className="cardcontent">
                 <div className="content">
                 <p id='category'>{item.category}</p>
                 <p>{item.price}  <i className="fas fa-rupee-sign"></i></p>
                 </div>
                 <div >
                     <p className="far fa-heart" ></p>
                 </div>
             </div>
          </div> }) }
        
           </div> :''
       } 
           
       </div>
            <Footer/>
        </div>
    )
}

export default Products
