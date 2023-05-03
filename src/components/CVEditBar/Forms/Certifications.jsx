import React from 'react'

const Certifications = () => {
  return (
    <section className="edit-section">
      <h1 className='edit-section-title'>Your Certifications</h1>

      <form className=''>
        <div className="input-container">
          <span className="label">Section Title</span>
          <input 
            type="text"
            />
        </div>

        <p className="label section-label">Certifications</p>

        <section className="form-card">
          <button className='x-btn' type='button'>X</button>

          <div className="input-container">
            <p className="label">Name</p>
            <input 
              type="text"
              />
          </div>
          <div className="input-container">
            <p className="label">Date</p>
            <input 
              type="text"
              />
          </div>

        </section>

        <button className='add-entry-btn' type='button'>
          Add Certification
        </button>
      </form>
    </section>
  )
}

export default Certifications