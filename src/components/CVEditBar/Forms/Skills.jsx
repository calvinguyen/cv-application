const SkillItem = ({ skill, onSkillChange, onDeleteSkill }) => {
  return (
    <div className="skill-input-container">
      <input
        type="text"
        name="name"
        value={skill.name}
        onChange={(e) => onSkillChange(e, skill.id)}
      />
      <button
        className="x-btn input-x-btn"
        type="button"
        onClick={() => onDeleteSkill(skill.id)}
      >
        X
      </button>
      <input
        type="range"
        name="level"
        min="0"
        max="100"
        value={skill.level}
        onChange={(e) => onSkillChange(e, skill.id)}
      />
    </div>
  );
};

const Skills = ({
  skills,
  sectionTitle,
  onSectionTitleChange,
  onAddSkill,
  onSkillChange,
  onDeleteSkill,
}) => {
  const renderSkills = skills.map((skill) => (
    <SkillItem
      key={skill.id}
      skill={skill}
      onSkillChange={onSkillChange}
      onDeleteSkill={onDeleteSkill}
    />
  ));

  return (
    <section id="skills-form" className="edit-section">
      <h1 className="edit-section-title">Your Skills</h1>

      <form className="">
        <div className="input-container">
          <span className="label">Section Title</span>
          <input
            type="text"
            name="skillSectionTitle"
            value={sectionTitle}
            onChange={(e) => onSectionTitleChange(e)}
          />
        </div>

        <p className="label section-label">Skills</p>
        {renderSkills}

        <button
          className="add-entry-btn"
          type="button"
          onClick={() => onAddSkill()}
        >
          Add Skill
        </button>
      </form>
    </section>
  );
};

export default Skills;
