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
      <progress name="level" value={skill.level} max="100" />
    </div>
  );
};

export default SkillItem;
