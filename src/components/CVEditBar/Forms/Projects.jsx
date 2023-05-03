const Projects = () => {
  return (
    <section className="edit-section">
      <h1 className='edit-section-title'>Your Projects</h1>

      <form className=''>
        <div className="input-container">
          <span className="label">Section Title</span>
          <input 
            type="text"
            />
        </div>

        <p className="label section-label">Projects</p>

        <section className="form-card">
          <button className='x-btn' type='button'>X</button>

          <div className="input-container">
            <p className="label">Title</p>
            <input 
              type="text"
              />
          </div>
          <div className="input-container">
            <p className="label">Tech Stack</p>
            <input 
              type="text"
              />
          </div>
          <div className="input-container">
            <p className="label">Project URL</p>
            <input 
              type="text"
              />
          </div>

          <div className="two-col">
            <div className="input-container">
              <p className="label">Start Date</p>
              <input 
                type="text"
                />
            </div>
            <div className="input-container">
              <p className="label">End Date</p>
              <input 
                type="text"
                />
            </div>
          </div>

          <div className="input-container">
            <p className="label">Description</p>

            <div className="skill-input-container">
              <input 
                type="text"
                />
              <button className='x-btn input-x-btn' type='button'>X</button>
            </div>
            <div className="skill-input-container">
              <input 
                type="text"
                />
              <button className='x-btn input-x-btn' type='button'>X</button>
            </div>

          </div>

        </section>

        <button className='add-entry-btn' type='button'>
          Add Project
        </button>
      </form>
    </section>
  )
}

export default Projects