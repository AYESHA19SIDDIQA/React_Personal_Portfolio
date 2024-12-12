// ProjectsPage.js
import React from "react";
import Header from "../components/Header";
const ProjectsPage = () => {
  const projects = [
    { title: "Potato Disease Detection", description: "Developed an ML model to detect diseases in potato plants using image recognition and deep learning techniques." },
    { title: "Housing Price Prediction", description: "Built a regression model to predict housing prices based on various socio-economic factors, improving accuracy by applying data preprocessing techniques." },
    { title: "Change Detection Project", description: "Worked on a change detection project using satellite imagery data and machine learning algorithms to identify significant environmental changes." },
    { title: "Urban Expansion Study", description: "Used transformers to study urban growth patterns and analyzed satellite data for insights into urban development." },
  ];

  return (
    <div>
    <Header/>
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectsPage;