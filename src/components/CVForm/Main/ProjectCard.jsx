import React from 'react'

const ProjectCard = () => {
  return (
    <div className="card">
      <p className="card-title">The Social Network</p>
      <p className="card-subtitle">
        MERN Stack &#8226; {' '}
        <a href="#cv-main" className="project-link">Github Link</a> &#8226;
        March 2014 — June 2015
      </p>
      <ul className="card-description">
        <li>
          Designed, developed, and deployed a secure file sharing web application to Google Cloud
          currently in use by over 10 legal professionals.
        </li>
        <li>
          Optimized for 0 downtime during deployments, autoscaling when processing a large number
          of documents, and caching files that are downloaded most frequently.
        </li>
        <li>
          Improved test coverage by setting up an end-to-end and unit test framework to reduce the
          risk of breaking production after the addition of new engineers on the project.
        </li>
      </ul>
    </div>
  )
}

export default ProjectCard