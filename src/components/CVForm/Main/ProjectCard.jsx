const ProjectCard = ({ project }) => {
  const bulletPoints = project.description.map((item) => {
    return <li key={item.id}>{item.desc}</li>;
  });

  return (
    <div className="card">
      <p className="card-title">{project.title}</p>
      <p className="card-subtitle">
        {project.techStack} {'\u2022'}{' '}
        <a
          href={`https://${project.projectUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {project.projectUrl && 'Project Link'}
        </a>{' '}
        {project.projectUrl && '\u2022'}{' '}
        {`${project.startDate} - ${project.endDate}`}
      </p>
      <ul className="card-description">{bulletPoints}</ul>
    </div>
  );
};

export default ProjectCard;
