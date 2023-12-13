
import {  Grid } from '@mui/material'
import './App.css'
import Header from './components/Header.jsx'
import tourData from  './assets/data/tourData.jsx'
import CardList from './components/CardList.jsx'
// import Search from './components/Search.jsx'

function App() {
  

  return (
    <>
    
        
         <Header title="Guzo Travel"  />
         {/* <Search sx={{justifyContent:'center'}}/> */}

         <Grid container  sx={{ m:'auto', mt:5 , justifyContent:'center'}}>
            <CardList tourData={tourData} />
             
         </Grid>
         
         
   
      
    </>
  )
}

export default App
