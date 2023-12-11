
import {  Grid } from '@mui/material'
import './App.css'
import Header from './components/Header.jsx'
import tourData from  './assets/data/tourData.jsx'
import CardList from './components/CardList.jsx'

function App() {
  

  return (
    <>
    
        
         <Header title="Guzo Travel"  />
         <Grid container  sx={{ m:10, mt:5}}>
            <CardList tourData={tourData} />
             
         </Grid>
         
         
   
      
    </>
  )
}

export default App
