// import emailSvg from "../components/assets/email"
import React from 'react';
import "../components/card.css";
import axios from 'axios';
import { useEffect, useState } from 'react';


const Card = () => {
  
  const [name, setName] = useState("");
  const [large, setLarge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");

  const axiosRandomUser = () => {
    axios("https://randomuser.me/api/").then((res) => {
      setName(res.data.results[0].name);
      setLarge(res.data.results[0].picture.large);
      setEmail(res.data.results[0].email);
      setPhone(res.data.results[0].phone);
      setCity(res.data.results[0].location.city);
      setAge(res.data.results[0].dob.age);
      setDate(res.data.results[0].registered.date);
      setCountry(res.data.results[0].location.country);
    })};
    useEffect(() => {
      axiosRandomUser();
    }, []);
  
  return (
  
   <>
    <div className='card'>
      <svg style={{ backgroundImage: `url(${large})` }} width="110" height="110"   role="img"  className="center">
      </svg>
      <h2> {name.title}  {name.first} {name.last}  </h2>
      <h2> { email }</h2>
      <h2> { phone }</h2>
      <h2> { city } - { country } </h2>
      <h2>  </h2>
      <h4>Age: { age }</h4>
      <h4>Registered Date:  { date.slice(0,10) }</h4>
    </div>
    <div>
      <button className='randomUser' onClick={() => axiosRandomUser() }>
        Random User
      </button>
    </div>
    </>
    
  )

}

export default Card;