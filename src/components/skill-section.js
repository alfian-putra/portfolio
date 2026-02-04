//import  Stack   from "@mui/material";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import "../index.css";


function SkillSection(prop){
    

    return(
        <div className="skill">
        <h2>Stack</h2>
        <Box
        sx={{
            width: '80%',
            display: 'grid',
            margin: '0 auto',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
            gap: 2,
        }}
      >
        {prop.cards.map((card, index) => (
          <Card
            sx={{
                display: "flex",
                margin: '5px',
                color: "white",
                bgcolor: "#242424ff",
                boxShadow: 7}}
            >
            <CardActionArea
              sx={{
                '&[data-active]': {
                  backgroundColor: 'action.selected',
                  '&:hover': {
                    backgroundColor: 'action.selectedHover',
                  },
                },
              }}
            >
              <CardContent sx={{ height: '100%' , width: "100%"}}>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <br/>
                <Typography variant="body2" sx={{width: "80%"}} align="justify">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      </div>
    );
  }


export default SkillSection;