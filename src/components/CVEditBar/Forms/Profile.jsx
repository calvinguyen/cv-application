const Profile = () => {
  return (
    <section id="profile-form" className="edit-section">
      <h1 className='edit-section-title'>Your Profile</h1>

      <form className=''>
        <div className="two-col">
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
  )
}

export default Profile