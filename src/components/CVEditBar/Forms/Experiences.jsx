const Description = ({
  workId,
  bulletPoint,
  onDescriptionChange,
  onDeleteDescription,
}) => {
  return (
    <div className="skill-input-container">
      <input
        type="text"
        value={bulletPoint.desc}
        onChange={(e) =>
          onDescriptionChange(e, bulletPoint.id, 'experiences', workId)
        }
      />
      <button
        className="x-btn input-x-btn"
        type="button"
        onClick={() =>
          onDeleteDescription(bulletPoint.id, 'experiences', workId)
        }
      >
        X
      </button>
    </div>
  );
};

const ExpCard = ({
  work,
  onFormChange,
  onDeleteFormCard,
  onDescriptionChange,
  onAddDescription,
  onDeleteDescription,
}) => {
  const renderDescriptions = work.description.map((desc) => (
    <Description
      key={desc.id}
      workId={work.id}
      bulletPoint={desc}
      onDescriptionChange={onDescriptionChange}
      onDeleteDescription={onDeleteDescription}
    />
  ));

  return (
    <section className="form-card">
      <button
        className="x-btn"
        type="button"
        onClick={() => onDeleteFormCard(work.id, 'experiences')}
      >
        X
      </button>
      <div className="input-container">
        <p className="label">Company</p>
        <input
          type="text"
          name="company"
          value={work.company}
          onChange={(e) => onFormChange(e, work.id, 'experiences')}
        />
      </div>
      <div className="input-container">
        <p className="label">Job Title</p>
        <input
          type="text"
          name="jobTitle"
          value={work.jobTitle}
          onChange={(e) => onFormChange(e, work.id, 'experiences')}
        />
      </div>
      <div className="input-container">
        <p className="label">Location</p>
        <input
          type="text"
          name="location"
          value={work.location}
          onChange={(e) => onFormChange(e, work.id, 'experiences')}
        />
      </div>
      <div className="two-col">
        <div className="input-container">
          <p className="label">Start Date</p>
          <input
            type="text"
            name="startDate"
            value={work.startDate}
            onChange={(e) => onFormChange(e, work.id, 'experiences')}
          />
        </div>
        <div className="input-container">
          <p className="label">End Date</p>
          <input
            type="text"
            name="endDate"
            value={work.endDate}
            onChange={(e) => onFormChange(e, work.id, 'experiences')}
          />
        </div>
      </div>
      <div className="input-container">
        <p className="label">Description</p>
        {renderDescriptions}
      </div>
      <button
        className="add-desc-btn"
        type="button"
        onClick={() => onAddDescription('experiences', work.id)}
      >
        Add Bullet Point
      </button>
    </section>
  );
};

const Experiences = ({
  experiences,
  sectionTitle,
  onSectionTitleChange,
  onAddExperience,
  onDescriptionChange,
  onAddDescription,
  onDeleteDescription,
  onFormChange,
  onDeleteFormCard,
}) => {
  const renderExp = experiences.map((work) => (
    <ExpCard
      key={work.id}
      work={work}
      onFormChange={onFormChange}
      onDeleteFormCard={onDeleteFormCard}
      onDescriptionChange={onDescriptionChange}
      onAddDescription={onAddDescription}
      onDeleteDescription={onDeleteDescription}
    />
  ));

  return (
    <section id="work-form" className="edit-section">
      <h1 className="edit-section-title">Your Work Experience</h1>

      <form className="">
        <div className="input-container">
          <span className="label">Section Title</span>
          <input
            type="text"
            name="experienceSectionTitle"
            value={sectionTitle}
            onChange={(e) => onSectionTitleChange(e)}
          />
        </div>
        <p className="label section-label">Experiences</p>
        {renderExp}

        <button
          className="add-entry-btn"
          type="button"
          onClick={() => onAddExperience()}
        >
          Add Work Experience
        </button>
      </form>
    </section>
  );
};

export default Experiences;
