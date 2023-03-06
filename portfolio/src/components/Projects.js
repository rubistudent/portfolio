import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useEffect } from "react";
import { useState } from "react";




export const Projects = () => {

  const[projects,setProjects] = useState([])
useEffect(()=>{
  fetch("http://localhost:9292/projects")
  .then(response=>response.json())
  .then(data=>setProjects(data))
},[])
function deleteProject(id){
  fetch(`http://localhost:9292/project/${id}`,{
    method: "DELETE"
  })
  .then(response => response.json())
  .then(()=>setProjects(projects.filter(project => project.id !== id)))
  .catch(error=>console.log(error))
}
  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Different samples of projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                project={project}
                            deleteProject={deleteProject}

                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>important projects</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Sample projects</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}