import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import React, { useState } from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: "Web Development", image: meter1 },
    { id: 2, name: "Design", image: meter2 },
    { id: 3, name: "Computer Guru", image: meter3 },
    { id: 4, name: "Game Designer", image: meter1 },
  ]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const handleAddSkill = () => {
    const newId = skills[skills.length - 1].id + 1;
    setSkills([
      ...skills,
      { id: newId, name: `Skill ${newId}`, image: meter1 }
    ]);
  };

  const handleDeleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My skills are improving day by day<br></br> Different skills.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          {skills.map(skill => (
                            <div className="item" key={skill.id}>
                              <img src={skill.image} alt={skill.name} />
                              <h5>{skill.name}</h5>
                              <button className="delete-button" onClick={() => handleDeleteSkill(skill.id)}>Delete</button>
                            </div>
                          ))}
                        </Carousel>
                        <div className="skill-buttons">
                         
