import ProjectCard from './ProjectCard';

const Projects = ({ projects, sectionTitle }) => {
  const cards = projects.map((card) => {
    return <ProjectCard key={card.id} project={card} />;
  });

  return (
    <section className="projects">
      <h1 className="section-title">{sectionTitle}</h1>
      {cards}
    </section>
  );
};

export default Projects;
