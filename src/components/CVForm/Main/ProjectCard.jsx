const ProjectCard = ({project}) => {
  const bulletPoints = project.description.map(item => {
    return <li key={item.id}>{ item.desc }</li>;
  })

  return (
    <div className="card">
      <p className="card-title">{project.title}</p>
      <p className="card-subtitle">
        {project.techStack} &#8226; {' '}
        <a href="#cv-main" className="project-link">{project.projectUrl}</a> &#8226;
        {project.startDate} — {project.endDate}
      </p>
      <ul className="card-description">
        {bulletPoints}
      </ul>
    </div>
  )
}

export default ProjectCard