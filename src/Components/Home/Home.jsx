import React ,{useEffect,useState}from 'react'
import Carousel from '../Carousel/Carousel'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import "./Home.css"
function Home() {
    const history = useHistory()
const [data, setdata] = useState('')
const [count, setcount] = useState(5)
const [load, setload] = useState(false)
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products?limit=${count}`).then((res)=>{
          setdata(res.data)
          console.log(res.data)
          setload(!load)
      }).catch((err)=>{
          console.log(err)
      })
    }, [count])

    const limit =(cnut)=>{
        if(cnut>20) return alert ('list over')
        setload(!load)
        setcount(cnut)
    }
    const View =(id)=>{
     history.push(`/view/${id}`)
    }

    return (
        <div>
            <Navbar/>
            <Carousel/>
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
          <div className="btnn">
          <button className="btn btn-success" onClick={()=>limit(count+5)}>{load?'Load More':'Loading....'}</button>
          </div>
           </div> :''
       }
        </div>
            <Footer/>
        </div>
    )
}

export default Home
