
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';

import "../index.css";



function PortfolioSection(props){

    let cards = [];

    Object.entries(props.list).map(([key,elm]) => {
        let tags = [];
        Object.entries(elm["tag"]).map(([k, t]) => {
            tags.push(
                <span className="tag">{t}</span>
            )
        })

        cards.push(
            <Card sx={{ 
                    margin: "0 auto",
                    minWidth: '600px',
                    maxWidth: '1000px',
                    minHeight: '300px',
                    maxHeight: '375px',
                    display: 'flex',
                    color: "white",
                    bgcolor: "#242424ff",
                    boxShadow: 7,
                    borderRadius: "25px",
                }}>
                <CardMedia
                    component="img"
                    sx={{ 
                        width: 300,
                    }}
                    image={elm["img"]}
                    alt="Project Visual"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px 20px 20px 20px' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h4" sx={{marginBottom: '30px' }}>
                        {elm["name"]}
                    </Typography>
                    <Typography  variant="h5">
                        Stack :
                    </Typography>
                    <Typography  sx={{marginBottom: '20px'}}>
                        {
                            tags
                        }
                    </Typography>
                    <Typography
                        align="justify"
                        variant="subtitle1"
                        component="div"

                    >
                        { elm["description"]}
                    </Typography>
                    <a style={{paddingBottom: "20px"}} target="_blank" rel="noopener noreferrer"  className="more" href={elm["link"]}>more</a>
                    </CardContent>
                </Box>
            </Card>
        );
    })
    return (
        <div className="portfolio">
            {/* <h2>portfolio</h2> */}
            <h2>Portfolio</h2>
            <h4>{props.title}</h4>
            
            <Carousel
                animation="slide"
                interval={12000}
                duration={900}
                navButtonsAlwaysVisible="true"
            >
                {
                    cards
                }
            </Carousel>
            
        </div>
    )
};

export default PortfolioSection;