const Description = ({workId, bulletPoint, onDescriptionChange, onDeleteDescription}) => {
  return (
    <div className="skill-input-container">
      <input 
        type="text"
        value={bulletPoint.desc}
        onChange={e => onDescriptionChange(e, bulletPoint.id, 'experiences', workId)}
        />
      <button 
        className='x-btn input-x-btn' 
        type='button'
        onClick={() => onDeleteDescription(bulletPoint.id, 'experiences', workId)}
      >
        X
      </button>
    </div>
  )
}

const ExpCard = ({work, onExperienceChange, onDeleteExperience, onDescriptionChange, onAddDescription, onDeleteDescription }) => {
  const renderDescriptions = work.description.map(desc => (
    <Description
      key={desc.id} 
      workId={work.id}
      bulletPoint={desc}
      onDescriptionChange={onDescriptionChange}
      onDeleteDescription={onDeleteDescription}
    />
  ))
  
  return (
    <section className="form-card">
      <button 
        className='x-btn' 
        type='button'
        onClick={() => onDeleteExperience(work.id)}
      >
        X
      </button>
      <div className="input-container">
        <p className="label">Company</p>
        <input 
          type="text"
          name="company"
          value={work.company}
          onChange={e => onExperienceChange(e, work.id)}
        />
      </div>
      <div className="input-container">
        <p className="label">Job Title</p>
        <input 
          type="text"
          name="jobTitle"
          value={work.jobTitle}
          onChange={e => onExperienceChange(e, work.id)}
          />
      </div>
      <div className="input-container">
        <p className="label">Location</p>
        <input 
          type="text"
          name="location"
          value={work.location}
          onChange={e => onExperienceChange(e, work.id)}
          />
      </div>
      <div className="two-col">
        <div className="input-container">
          <p className="label">Start Date</p>
          <input 
            type="text"
            name="startDate"
            value={work.startDate}
            onChange={e => onExperienceChange(e, work.id)}
            />
        </div>
        <div className="input-container">
          <p className="label">End Date</p>
          <input 
            type="text"
            name="endDate"
            value={work.endDate}
            onChange={e => onExperienceChange(e, work.id)}
            />
        </div>
      </div>
      <div className="input-container">
        <p className="label">Description</p>
        {renderDescriptions}
      </div>
      <button 
        className='add-desc-btn' 
        type='button'
        onClick={() => onAddDescription('experiences', work.id)}
      >
        Add Bullet Point
      </button>
    </section>
  )
}

const Experiences = ({
  experiences,
  sectionTitle,
  onSectionTitleChange,
  onExperienceChange,
  onAddExperience,
  onDeleteExperience,
  onDescriptionChange,
  onAddDescription,
  onDeleteDescription,
}) => {
  const renderExp = experiences.map(work => (
    <ExpCard 
      key={work.id}
      work={work}
      onExperienceChange={onExperienceChange}
      onDeleteExperience={onDeleteExperience}
      onDescriptionChange={onDescriptionChange}
      onAddDescription={onAddDescription}
      onDeleteDescription={onDeleteDescription}
    />
  ));

  return (
    <section id="work-form" className="edit-section">
      <h1 className='edit-section-title'>Your Work Experience</h1>

      <form className=''>
        <div className="input-container">
          <span className="label">Section Title</span>
          <input 
            type="text"
            name="experienceSectionTitle"
            value={sectionTitle}
            onChange={e => onSectionTitleChange(e)}
          />
        </div>
        <p className="label section-label">Experiences</p>
        {renderExp}

        <button 
          className='add-entry-btn' 
          type='button'
          onClick={() => onAddExperience()}
        >
          Add Work Experience
        </button>
      </form>
    </section>
  )
}

export default Experiences