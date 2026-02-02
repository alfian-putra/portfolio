import React from "https://unpkg.com/react@18/umd/react.development.js";
//import  Stack   from "@mui/material";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Tooltip from '@mui/material/Tooltip';
import CardMedia from '@mui/material/CardMedia';


import "../index.css";


function ContactSection(prop){

    return(
        <div className="contact">
        <h2>Find me</h2>
        <Box
        sx={{
            width: "50%",
            display: 'flex',
            margin: "0 auto",
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100px, 50%), 1fr))',
            gap: 2,
        }}
      >
        {prop.cards.map((card) => (
          <Tooltip title={card.title}>
            <a href={card.link}>
              <Card
                sx={{
                    height: "75px",
                    width: "75px",
                    display: "flex",
                    color: "white",
                    bgcolor: "#242424ff",
                    boxShadow: 7}}
                >
                <CardActionArea
                  sx={{
                    height: '100%' , 
                    width: "100%",
                    padding: "15px",
                    '&[data-active]': {
                      backgroundColor: 'action.selected',
                      '&:hover': {
                        backgroundColor: 'action.selectedHover',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ padding: "0px", height: '100%' , width: "100%" , display: "flex"}}>
                    <CardMedia
                      component="img"
                      height="auto"
                      width="50%"
                      image={card.image}
                      sx={{
                        margin: "0 auto"
                      }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
              </a>
          </Tooltip>
          
        ))}
      </Box>
      </div>
    );
  }


export default ContactSection;