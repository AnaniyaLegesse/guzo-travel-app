import Header from "./Header";
import {   Container, Typography } from '@mui/material'


const DetailPage = () => {
    return (
        <>
         <Header title="Guzo Travel"  />
         <Container sx={{m:10}}>

    
         <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
            sx={{ flex: 1 }}
        >
            Newyork

         </Typography>
         <Typography>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sit inventore veritatis qui 
         illum provident natus veniam rem, facere eos. Excepturi totam consequuntur iure itaque vel blanditiis,
          necessitatibus odit eveniet. Officiis amet, soluta odit quisquam nihil veritatis mollitia est aliquam
           unde nam reprehenderit. Deserunt nobis quisquam tempore totam possimus recusandae cumque! Possimus
            itaque aut, vitae fugit beatae iure nulla eligendi modi, labore sit ad. Iure, nisi assumenda
             praesentium officiis expedita quas mollitia ad, illum doloribus aperiam eos asperiores perferendis
              veniam. Iste magnam nisi consectetur est, totam temporibus autem amet aspernatur sapiente ab,
               harum sint tenetur deleniti dolorem inventore facere illo.
         </Typography>
         
         </Container>  
             
         
        </>
    );
}



export default DetailPage;