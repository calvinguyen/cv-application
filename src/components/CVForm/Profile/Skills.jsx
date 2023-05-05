const SkillItem = ({ skill }) => {
  return (
    <li className="skill-item">
      <p>{skill.name}</p>
      <progress value={skill.level} max="100" />
    </li>
  );
};

const Skills = ({ skills, sectionTitle }) => {
  const renderSkills = skills.map((skill) => (
    <SkillItem key={skill.id} skill={skill} />
  ));

  return (
    <section className="skills">
      <h1 className="section-title section-title-profile">{sectionTitle}</h1>
      <ul className="skills-list">{renderSkills}</ul>
    </section>
  );
};

export default Skills;
