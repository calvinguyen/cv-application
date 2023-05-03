const Education = () => {
  return (
    <section id="school-form" className="edit-section">
      <h1 className='edit-section-title'>Your Education</h1>

      <form className=''>
        <div className="input-container">
          <span className="label">Section Title</span>
          <input 
            type="text"
            />
        </div>

        <p className="label section-label">Schools</p>

        <section className="form-card">
          <button className='x-btn' type='button'>X</button>

          <div className="input-container">
            <p className="label">School Name</p>
            <input 
              type="text"
              />
          </div>
          <div className="input-container">
            <p className="label">School Location</p>
            <input 
              type="text"
              />
          </div>

          <div className="three-col">
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
            <div className="input-container">
              <p className="label">GPA</p>
              <input 
                type="text"
                />
            </div>
          </div>

          <div className="input-container">
            <p className="label">Degree</p>
            <input 
              type="text"
              />
          </div>

        </section>

        <button className='add-entry-btn' type='button'>
          Add School
        </button>
      </form>
    </section>
  )
}

export default Education