import {  Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

import ControlledAccordions from "./Accordian";
import QuiltedImageList from "./ImageLists";
import Header from "./Header";



export default function Tour() {
  
  return (
    <>
    <Header title="Guzo Travel"  />
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Las vegas Navada
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
        />
        <QuiltedImageList />
      </Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About Las vegas
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography variant="paragraph" component="p" marginY={3}>
        Las Vegas is a dazzling city in the desert, famous for its casinos,
         shows, and nightlife. It is a popular destination for tourists from all 
         over the world, who come to enjoy its entertainment, shopping, dining, 
         and attractions. Whether you want to try your luck at the slot machines,
          watch a spectacular performance, or explore the natural wonders nearby,
           Las Vegas has something for everyone.
        </Typography>
      </Box>
      <Typography variant="h6" component="h4" marginBottom={3}>
        Frequently Asked Questions
      </Typography>
      <ControlledAccordions />
    </Container>
    </>
  );
}