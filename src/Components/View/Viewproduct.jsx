import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./view.css";
function View() {
  const { id } = useParams();
  const [data, setdata] = useState("");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="viewproduct">
        {data ? (
          <div className="view">
            <div className="screen">
              <img src={data.image} alt="" />
            </div>
            <div className="buy">
            
                <h5 id="title">{data.title}</h5>
                  <p id="category">{data.category}</p>
                  <p>
                    {data.price} <i className="fas fa-rupee-sign"></i>
                  </p><br />
                    <button className="btn btn-primary px-4">Buy</button><br />
                   <div className='description'>
                    <samll >{data.description}</samll>
                   </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}

export default View;
