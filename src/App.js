import { useState, useEffect } from "react";
import './App.scss';
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'


function App() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE1YWI2OTQyNjM5YjAwMjEyY2MwOTgiLCJpYXQiOjE2NDU1ODczMDV9.gpQ6fUYPx8V5RgpNEwlx4ln7z5ipNcXMyG-UBVAEa2M';

    const [user, setUser] = useState({name:'',points:''});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://coding-challenge-api.aerolab.co/user/me', {
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${token}`
            }})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUser(data)
            })

        fetch('https://coding-challenge-api.aerolab.co/products', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        }})
        .then(response => response.json())
        .then(data => {
            let date = new Date().getTime()
            data.forEach(element => {
              
              element['date'] = date;
              date++; 
              
             
            });
            setProducts(data);
        })
    },[])


    
  return (
    <div className="App">
      <Header user={user}/>
      <Main products={products}/>
      <Footer/>
    </div>
  );
}

export default App;
