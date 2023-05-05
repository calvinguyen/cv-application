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

export default SkillItem;
