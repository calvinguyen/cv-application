import SkillItem from './SkillItem';

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
