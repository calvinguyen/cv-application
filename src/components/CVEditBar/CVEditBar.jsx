import '../../assets/css/CVEditBar.css';

const CVEditBar = () => {
  return (
    <section id='cv-edit-bar'>
      <h1 className="edit-bar-title">Editing CV</h1>

      <section className="edit-section">
        <h1 className='edit-section-title'>Your Profile</h1>

        <form className='profile-form'>
          <div className="input-container">
            <p className="label">Your First Name</p>
            <input 
              type="text"
               />
          </div>
          <div className="input-container">
            <p className="label">Your Last Name</p>
            <input 
              type="text"
               />
          </div>
          <div className="input-container">
            <p className="label">Your Phone Number</p>
            <input 
              type="text"
               />
          </div>
          <div className="input-container">
            <p className="label">Your Email</p>
            <input 
              type="text"
               />
          </div>
          <div className="input-container span-col">
            <p className="label">Your Location</p>
            <input 
              type="text"
               />
          </div>
          <div className="input-container span-col">
            <p className="label">Your Website</p>
            <input 
              type="text"
               />
          </div>
          <div className="input-container span-col">
            <p className="label">Your CV Summary</p>
            <textarea name="cv-summary" id="cv-summary" rows="7" />
          </div>
          
        </form>
      </section>

      <section className="edit-section">
        <h1 className='edit-section-title'>Your Social Profiles</h1>
      </section>
      
      <section className="edit-section">
        <h1 className='edit-section-title'>Your Skills</h1>
      </section>

      <section className="edit-section">
        <h1 className='edit-section-title'>Your Hobbies</h1>
      </section>

      <section className="edit-section">
        <h1 className='edit-section-title'>Your Education</h1>
      </section>

      <section className="edit-section">
        <h1 className='edit-section-title'>Your Work Experiences</h1>
      </section>

      <section className="edit-section">
        <h1 className='edit-section-title'>Your Projects</h1>
      </section>
      
      <section className="edit-section">
        <h1 className='edit-section-title'>Your Organizations</h1>
      </section>

      <section className="edit-section">
        <h1 className='edit-section-title'>Your Certifications</h1>
      </section>
      
    </section>
  )
}

export default CVEditBar