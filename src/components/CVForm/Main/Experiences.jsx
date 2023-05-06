import ExperienceCard from "./ExperienceCard";

const Experiences = ({experiences, sectionTitle}) => {
  const experienceCards = experiences.map(card => {
    return (
      <ExperienceCard 
        key={card.id}
        work={card} />
    );
  })

  return (
    <section className="experiences">
      <h1 className="section-title">{sectionTitle}</h1>
      {experienceCards}
    </section>
  );
};

export default Experiences;
