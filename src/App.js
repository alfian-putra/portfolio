import {useState} from "react";

import HeaderSection from './components/header-section';
import SkillSection from './components/skill-section';
import PortfolioSection from './components/portfolio-section';
import WorkExperienceSection from './components/work_experience-section';
import ProjectSection from './components/projects-section';
import ContactSection from './components/contact-section';
import CertSection from './components/certificate-section';

//Portfolio image
import portoCoding from "./img/walkator-klMii3cR9iI-unsplash.jpg"
import gowfLogo from './img/gowf.png';
import kvm from "./img/kvmManager.png";
import supersetLogo from "./img/superset.png";
import shinyLogo from "./img/shiny.png";

import pyLogo from "./img/py.png";
import dataLogo from "./img/dataOrc.png";
import vueLogo from "./img/vue.png";
import goLogo from "./img/goLogo.png";

import devopsLogo from "./img/devops.jpg";

//contacct/find me
import gmail from "./imgContact/gmail.svg";
import linkedin from "./img/linkedin.png";
import medium from './img/medium.png';
import github from "./img/github.png";

import ScrollIntoView from 'react-scroll-into-view'


import "./index.css";

function App() {

  const [curr, setCurr] = useState("header");


  

  return (
    <div className="App">
      <ul className="ulMenu">
        <li>
          <ScrollIntoView className="menuLink" selector=".header">
            Introduction
          </ScrollIntoView>
        </li>
        <li>
          <ScrollIntoView className="menuLink" selector=".skill">
            Stack
          </ScrollIntoView>
        </li>
        <li>
          <ScrollIntoView className="menuLink" selector=".portfolio">
            portfolio
          </ScrollIntoView>
        </li>
        <li>
          <ScrollIntoView className="menuLink" selector=".workExperience">
            Work Experience
          </ScrollIntoView>
        </li>
        {/* <li>
          <ScrollIntoView className="menuLink" selector=".projects">
            Projects
          </ScrollIntoView>
        </li> */}
        <li>
          <ScrollIntoView className="menuLink" selector=".contact">
            Find me
          </ScrollIntoView>
        </li>
      </ul>
      <HeaderSection title="Alfian Eza Putra"
                      desc="EDP with a developer background in infrastructure automation and backend engineering. Previously maintained a production Hadoop ecosystem and currently building personal projects in Go and Python."/>
      <SkillSection 
          const cards = {[
            {
              id: 1,
              title: 'KVM',
              description: 'Virtualization',
            },
            {
              id: 1,
              title: 'Docker',
              description: 'Containerization',
            },
            {
              id: 1,
              title: 'Jenkins',
              description: 'Ci/CD automation',
            },
            {
              id: 1,
              title: 'Google Cloud Engine',
              description: 'Cloud platform developed by Google.',
            },
            {
              id: 1,
              title: 'FastApi',
              description: 'Python framework for backend development',
            },
            {
              id: 2,
              title: 'Streamlit',
              description: 'Frontend developmennt',
            },
            {
              id: 2,
              title: 'Selenium',
              description: 'Web scrapping & auto filling',
            },
            {
              id: 2,
              title: 'SQLite',
              description: 'RDBMS for small project data',
            },
            {
              id: 2,
              title: 'PostgresQL',
              description: 'RDBMS for medium to large scale data',
            },
            {
              id: 2,
              title: 'MySQL',
              description: 'RDBMS for medium to large scale data',
            },
            {
              id: 3,
              title: 'Go',
              description: 'Automation and Backend',
            },
            {
              id: 4,
              title: 'React JS',
              description: 'Simple landing page portfolio.',
            },
            {
              id: 5,
              title: 'Linux (Fedora & Ubuntu)',
              description: 'As a main OS for daily use and server practicing.',
            }
          ]}
      />
<PortfolioSection title ="DevOps"
                      list={[
                             
                              {
                                "img" : devopsLogo,
                                "name" : "Devops Tools Documentation",
                                "tag" : ["Jenkins", "Docker", "Bash Scripting"],
                                "description" : "Hands-on DevOps documentation covering Jenkins, Docker, GCP, and infrastructure automation.",
                                "link" : "https://github.com/alfian-putra/devops-notes"
                              }
                          ]}

      />
      <PortfolioSection title ="Python"
                      list={[
                             
                              {
                                "img" : kvm,
                                "name" : "KVM Request Automation Using Telegram Bot",
                                "tag" : ["Python", "FastApi", "Streamlit", "PYTelegramBot", "lbvirt"],
                                "description" : "Automate KVM virtual machine provisioning using CSV to store VM request list that through telegram bot and admin approval via a web UI. The configuration injected using cloud-init on deployment process.",
                                "link" : "https://github.com/alfian-putra/kvm-manager"
                              },{
                                "img" : portoCoding,
                                "name": "Design Pattern in Python",
                                "tag": ["Python"],
                                "description": "This repository is a documentation of design pattern that implemented in python. I made an sort explanation to make it easily to understand.",
                                "link": "https://github.com/alfian-putra/python-design-pattern/tree/main"
                              },{
                                "img" : pyLogo,
                                "name": "EDFS – Example Distributed File System",
                                "tag": ["Python", "Linux (Fedora)", "SSH"],
                                "description": "EDFS (Example Distributed File System) is an experimental project inspired by HDFS, focusing on core distributed filesystem concepts such as metadata management, file chunking, and client–server coordination at a small scale.",
                                "link": "https://github.com/alfian-putra/edfs"
                              }
                          ]}

      />
      <PortfolioSection title ="Go"
                      list={[
                              {
                                  "img" : gowfLogo,
                                  'name' : 'GoWF! - Go workflow',
                                  'tag' : ['workflow', 'DevOps', 'Go', 'Automation', 'Sqlite', 'Cron', 'Debian packaging'],
                                  'description' : 'Gowf is a command automation that execute DAG (Direct Acyclic Graph) structured bash command. Gowf also have a scheduling feature that allow workflow execution on defined schedule. Gowf have a packaging feature that allow user to distribute it as *.deb',
                                  'link' : 'https://github.com/alfian-putra/gowf'
                              }
                          ]}

      />
      <PortfolioSection title="JavaScript"
                      list={[
                              {
                                "img" : vueLogo,
                                "name": "College Material Administration Interface",
                                "tag": ["VueJS","HTML","CSS"],
                                "description": "This is college assignment. In this assignment we got a task to make a college material interface to show the material module list and make an order.",
                                "link": "https://github.com/alfian-putra/college-material-management-interface-VueJS"
                              }
                      ]}
      />
      <PortfolioSection title ="Miscellanous"
                      list={[
                              {
                                "img" : supersetLogo,
                                "name": "Data Visualization with Apache Superset",
                                "tag": ["Python", "Apache Superset", "Linux"],
                                "description": "Built dashboards and data visualizations using Apache Superset to explore and present structured datasets in a clear and meaningful way.",
                                "link": "https://github.com/alfian-putra/data_visualization_superset"
                              },
                              {
                                "img" : shinyLogo,
                                "name": "Data Visualization Using Shiny (R Programming)",
                                "tag": ["R", "Shiny", "Linux"],
                                "description": "Built dashboards and data visualizations using Shiny to explore and present structured datasets in a clear and meaningful way.",
                                "link": "https://github.com/alfian-putra/data-visualization-r"
                              },
                              {
                                "img" : dataLogo,
                                "name": "Data Orchestration Lab",
                                "tag": ["Python", "Apache Airflow", "Hadoop", "Apache NiFi", "Apache Spark"],
                                "description": "A hands-on data orchestration environment covering service installation, configuration, and practical workflows using tools such as Airflow, NiFi, and Spark to understand scheduling and data pipeline execution.",
                                "link": "https://github.com/alfian-putra/data-orchestration/tree/master"
                              }
                          ]}

      />
      <WorkExperienceSection 
          data = {[
              {
                  "position" : "Graphic Designer | Internship",
                  "company" : "PT.Rumah Mesin",
                  "year" : "Oct 2019 - Dec 2019",
                  "description" : "Design a instagram post align with a brief that company gave."
              },
              {
                  "position" : "Developer",
                  "company" : "PT.Solusi 247",
                  "year" : "Aug 2022 - Jul 2024",
                  "description" : "Develop Hadoop environment that being maintained by Apache Ambari, ensuring the service can be run properly, and test the integration of each service."
              },
              {
                  "position" : "Electronic Data Processing",
                  "company" : "PT.Indomarco Prismatama",
                  "year" : "Oct 2024 - Present",
                  "description" : "Responsibility : Ensure branch convenient store online. Guide standby crew in convenient store to fix common hardware issue. Ensure the branch server runs properly. Reporting on daily connection recaps."
              }
          ]}
      />
      {/* <ProjectSection /> */}
      <CertSection />
      <ContactSection cards={[
        {
          id: 1,
          title: 'alfianezaputra@gmail.com',
          image: gmail,
          link: 'mailto:alfianezaputra@gmail.com',
        },
        {
          id: 2,
          title: 'Linkedin',
          image: linkedin,
          link: 'https://www.linkedin.com/in/alfian-eza-putra-46003b39a',
        },
        {
          id: 3,
          title: 'Medium',
          image: medium,
          link: 'https://medium.com/@alfi_',
        },
        {
          id: 4,
          title: 'Github',
          image: github,
          link: 'https://github.com/alfian-putra',
        }
      ]}/>
    </div>
  );
}

export default App;