import React from "https://unpkg.com/react@18/umd/react.development.js";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import "../index.css";



function ProjectSection(props){
    const data = [
        {
            "position" : "Developer",
            "company" : "PT.Company",
            "year" : "2001-2050",
            "description" : "Oww this is my descriptionnn Oww this is my descriptionnn Oww this is my descriptionnn Oww this is my descriptionnn"
        },
        {
            "position" : "Developer",
            "company" : "PT.Company",
            "year" : "2001-2050",
            "description" : "Oww this is my descriptionnn"
        },
        {
            "position" : "Developer",
            "company" : "PT.Company",
            "year" : "2001-2050",
            "description" : "Oww this is my descriptionnn"
        },
    ]

    let cards = [];

    Object.entries(data).map(([key, elm]) => {
        cards.push(
            <Card
                        sx={{
                            width: "800px",
                            height: "250px",
                            color: "white",
                            bgcolor: "#242424ff",
                            boxShadow: 7}}
                        >
                        <CardActionArea
                        sx={{
                            width: "1000px",
                            height: "250px",
                            '&[data-active]': {
                            backgroundColor: 'action.selected',
                            '&:hover': {
                                backgroundColor: 'action.selectedHover',
                            },
                            },
                        }}
                        >
                        <CardContent sx={{ height: "300px", margin: "30px"}}>
                            <Typography variant="h4" component="div">
                            {elm["position"]}
                            </Typography>
                            <Typography variant="h5" >
                                <span className="company">{elm["company"]}</span>
                                <span> </span>
                                <span className="year">{elm["year"]}</span>
                            </Typography>
                            <Typography variant="body2" sx={{width: "80%"}}>
                            {elm["description"]}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
        );
    });

    return (
        <div className="projects">
            <span className="projectsTitle">
                <h2>Projects</h2>
            </span>
            <span className="projectsList">
                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill,  1fr))',
                        gap: 2
                    }}
                >
                    {
                        cards
                    }
                </Box>
            </span>
        </div>
    )
}

export default ProjectSection;