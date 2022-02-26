import { useState, useEffect } from "react";
import './App.scss';
import Header from './layout/Header'
import Main from './layout/Main'
import toast, { Toaster } from 'react-hot-toast';


function App() {
  
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE1YWI2OTQyNjM5YjAwMjEyY2MwOTgiLCJpYXQiOjE2NDU1ODczMDV9.gpQ6fUYPx8V5RgpNEwlx4ln7z5ipNcXMyG-UBVAEa2M';  

    const [user, setUser] = useState({name:'',points:''});
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState({page: 0,length: 15});

    useEffect(() => {
        fetch('https://coding-challenge-api.aerolab.co/user/me', {
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${token}`
            }})
            .then(response => response.json())
            .then(data => {
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
    
    function setPoints(cost,add = false) {
      let refreshUserData = {...user}
      
      if(add){
        refreshUserData.points += cost
        if(refreshUserData.points > 10000) {
          refreshUserData.points = 10000
          setUser(refreshUserData)
          return toast.success('You reached the maximum points!')
        }
        setUser(refreshUserData)
        return toast.success('Points Added successfully!')
      }

      if(refreshUserData.points - cost < 0) return toast.error('Not enought founds!')
      
      refreshUserData.points -= cost
      setUser(refreshUserData)
      return toast.success('Successfully purchased!')
      }
    

    function changePage(){

      let newPage = {...page}

      if(!page.page){
          newPage.page = (products.length / 2)
          newPage.length = products.length - 1
          setPage(newPage)
          return
      }
      newPage.page = 0
      newPage.length = (products.length / 2) - 1 
      setPage(newPage)
  }
  
  return (
    <div className="App">
      <Header user={user} setPoints={setPoints}/>
      <Main userPoints={user.points} pagination={page} products={products} changePage={changePage} setPoints={setPoints}/>
      <Toaster position="top-center" reverseOrder={false}/>
    </div>
  );
}

export default App;
