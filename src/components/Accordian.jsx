import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
//   const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        marginBottom: 10,
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is there to do in Las Vegas during the day?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There are plenty of things to do in Las Vegas during the day,
           such as visiting the Strip, seeing a show, experiencing the nightlife, 
           exploring the attractions, or venturing outside the city to see the natural wonders.
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Cheap things to do in Las Vegas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Las Vegas can be an expensive city, but there are also many ways to enjoy it on
           a budget. Some of the cheap things to do in Las Vegas are: watching the free shows,
            such as the Bellagio fountains, the Mirage volcano, or the Circus Circus acts; 
            visiting the free attractions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What can you do for free in Las Vegas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         you can things for free in Las Vegas, such as: walking along the Strip and admiring the architecture,
          the lights, and the people; visiting the art galleries and museums, such as the CityCenter
           Fine Art Collection, the Bellagio Gallery of Fine Art, or the Marjorie Barrick Museum of Art.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}