const Profile = ({ generalInfo, onGeneralInfoChange }) => {
  return (
    <section id="profile-form" className="edit-section">
      <h1 className='edit-section-title'>Your Profile</h1>

      <form className=''>
        <div className="two-col">
          <div className="input-container">
            <p className="label">Your First Name</p>
            <input 
              type="text"
              name="firstName"
              value={generalInfo.firstName}
              onChange={e => onGeneralInfoChange(e)}
              />
          </div>
          <div className="input-container">
            <p className="label">Your Last Name</p>
            <input 
              type="text"
              name="lastName"
              value={generalInfo.lastName}
              onChange={e => onGeneralInfoChange(e)}
              />
          </div>
          <div className="input-container">
            <p className="label">Your Phone Number</p>
            <input 
              type="text"
              name="phone"
              value={generalInfo.phone}
              onChange={e => onGeneralInfoChange(e)}
              />
          </div>
          <div className="input-container">
            <p className="label">Your Email</p>
            <input 
              type="text"
              name="email"
              value={generalInfo.email}
              onChange={e => onGeneralInfoChange(e)}
              />
          </div>
        </div>
        <div className="input-container">
          <p className="label">Your Location</p>
          <input 
            type="text"
            name="location"
            value={generalInfo.location}
            onChange={e => onGeneralInfoChange(e)}
             />
        </div>
        <div className="input-container">
          <p className="label">Your Website</p>
          <input 
            type="text"
            name="personalWebsite"
            value={generalInfo.personalWebsite}
            onChange={e => onGeneralInfoChange(e)}
             />
        </div>
        <div className="input-container">
          <p className="label">Your CV Summary</p>
          <textarea
            name="cvSummary"
            value={generalInfo.cvSummary}
            onChange={e => onGeneralInfoChange(e)}
            rows="7" />
        </div>
      </form>
    </section>
  )
}

export default Profile