
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import "../index.css";



function WorkExperienceSection(props){


    let cards = [];

    Object.entries(props.data).map(([key, elm]) => {
        cards.push(
            <Card
                        sx={{
                            width: "800px",
                            color: "white",
                            bgcolor: "#242424ff",
                            boxShadow: 7}}
                        >
                        <CardActionArea
                        sx={{
                            width: "800px",
                            '&[data-active]': {
                            backgroundColor: 'action.selected',
                            '&:hover': {
                                backgroundColor: 'action.selectedHover',
                            },
                            },
                        }}
                        >
                        <CardContent sx={{ padding: '50px' }}>
                            <Typography variant="h4" component="div">
                            {elm["position"]}
                            </Typography>
                            <Typography variant="h5" >
                                <span className="company">{elm["company"]}</span>
                                <span> </span>
                                <span className="year">{elm["year"]}</span>
                            </Typography>
                            <Typography variant="body1"  align="justify">
                            {elm["description"]}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
        );
    });

    return (
        <div className="workExperience">
            <div className="workExpWraper">
                    <span className="workExperienceTitle">
                        <h2>Work Experience</h2>
                    </span>
                    <span className="workExperienceList">
                        <Box
                            sx={{
                                width: '70%',
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
        </div>
    )
}

export default WorkExperienceSection;