import React from "https://unpkg.com/react@18/umd/react.development.js";
//import  Stack   from "@mui/material";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import "../index.css";

import certAws from "../img/certificate/gl_aws.jpg"
import certKaggle_ml from "../img/certificate/kaggle_ml.png"
import certKaggle_pd from "../img/certificate/kaggle_pd.png"
import certKaggle_py from "../img/certificate/kaggle_py.png"
import certLinkedin_kernelLogging from "../img/certificate/ln_kernel_logging.jpg"
import certLinkedin_osForensic from "../img/certificate/ln_os_forensics.jpg"
import certUdemy_dp from "../img/certificate/udemy_dp.jpg"
import certUdemy_node from "../img/certificate/udemy_nodejs.jpg"
import certJuniorMobile from "../img/certificate/vsga.jpg"

function CertSection(prop){
    const data = [
      {
        img : certAws,
        title : "AWS for beginners",
        author : "GreatLearning"
      },{
        img : certKaggle_ml,
        title : "Intro to Machine Learning",
        author : "Kaggle"
      },{
        img : certKaggle_pd,
        title : "Pandas",
        author : "Kaggle"
      },{
        img : certKaggle_py,
        title : "Python",
        author : "Kaggle"
      },{
        img : certLinkedin_osForensic,
        title : "Operating System Forensic",
        author : "Linkedin Learning"
      },{
        img : certLinkedin_kernelLogging,
        title : "Linux: Kernels and Logging for System Administration",
        author : "Linkedin Learning"
      },{
        img : certUdemy_dp,
        title : "Design Pattern in Python",
        author : "Udemy"
      },{
        img : certUdemy_node,
        title : "NodeJS (MVC, REST APIs, GraphQL, Deno)",
        author : "Udemy"
      },{
        img : certJuniorMobile,
        title : "Spring Security 6 (JWT, OAuth2)",
        author : "Udemy"
      }
    ]

    return(
        <div className="skill">
        <h2>Certificate</h2>
        <ImageList cols={3} sx={{ width: "100%", height: "60vh" }}>
          {data.map((item) => (
            <ImageListItem sx={{ width: "100%", height: "auto"}} key={item.img}>
              <img
                srcSet={`${item.img}?w=24&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=24&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
              />
            </ImageListItem>
          ))}
        </ImageList>  


      </div>
    );
  }


export default CertSection;