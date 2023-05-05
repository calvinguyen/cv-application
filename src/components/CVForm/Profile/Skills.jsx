const Skills = ({skills, sectionTitle}) => {
  return (
    <section className="skills">
      <h1 className="section-title section-title-profile">{sectionTitle}</h1>
      <ul className="skills-list">
        <li className="skill-item">
          <p>ReactJS</p>
          <progress value="100" max="100" />
        </li>
        <li className="skill-item">
          <p>Jest</p>
          <progress value="100" max="100" />
        </li>
        <li className="skill-item">
          <p>ExpressJS</p>
          <progress value="100" max="100" />
        </li>
        <li className="skill-item">
          <p>Jupyter Notebook</p>
          <progress value="100" max="100" />
        </li>
        <li className="skill-item">
          <p>Django</p>
          <progress value="100" max="100" />
        </li>
      </ul>
    </section>
  );
};

export default Skills;
