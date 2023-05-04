const SkillItem = ({ skill }) => {
  return (
    <div className="skill-input-container">
      <input 
        type="text" 
        name="name"
        value={skill.name}
      />
      <button className="x-btn input-x-btn" type="button">
        X
      </button>
      <progress value={skill.level} max="100" />
    </div>
  );
};

export default SkillItem;
