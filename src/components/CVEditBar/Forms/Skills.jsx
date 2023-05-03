const Skills = () => {
  return (
    <section className="edit-section">
      <h1 className='edit-section-title'>Your Skills</h1>

      <form className=''>
        <div className="input-container">
          <span className="label">Section Title</span>
          <input 
            type="text"
            />
        </div>

        <p className="label section-label">Skills</p>
        <div className="skill-input-container">
          <input 
            type="text"
            />
          <button className='x-btn input-x-btn' type='button'>X</button>
          <progress value="70" max="100" />
        </div>
        <div className="skill-input-container">
          <input 
            type="text"
            />
          <button className='x-btn input-x-btn' type='button'>X</button>
          <progress value="70" max="100" />
        </div>

        <button className='add-entry-btn' type='button'>
          Add Skill
        </button>
      </form>
    </section>
  )
}

export default Skills