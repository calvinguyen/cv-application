const EducationCard = ({ school, onFormChange, onDeleteFormCard }) => {
  return (
    <section className="form-card">
      <button
        className="x-btn"
        type="button"
        onClick={() => onDeleteFormCard(school.id, 'education')}
      >
        X
      </button>

      <div className="input-container">
        <p className="label">School Name</p>
        <input
          type="text"
          name="schoolName"
          value={school.schoolName}
          onChange={(e) => onFormChange(e, school.id, 'education')}
        />
      </div>
      <div className="input-container">
        <p className="label">School Location</p>
        <input
          type="text"
          name="location"
          value={school.location}
          onChange={(e) => onFormChange(e, school.id, 'education')}
        />
      </div>
      <div className="three-col">
        <div className="input-container">
          <p className="label">Start Date</p>
          <input
            type="text"
            name="startDate"
            value={school.startDate}
            onChange={(e) => onFormChange(e, school.id, 'education')}
          />
        </div>
        <div className="input-container">
          <p className="label">End Date</p>
          <input
            type="text"
            name="endDate"
            value={school.endDate}
            onChange={(e) => onFormChange(e, school.id, 'education')}
          />
        </div>
        <div className="input-container">
          <p className="label">GPA</p>
          <input
            type="text"
            name="gpa"
            value={school.gpa}
            onChange={(e) => onFormChange(e, school.id, 'education')}
          />
        </div>
      </div>
      <div className="input-container">
        <p className="label">Degree</p>
        <input
          type="text"
          name="degree"
          value={school.degree}
          onChange={(e) => onFormChange(e, school.id, 'education')}
        />
      </div>
    </section>
  );
};

const Education = ({
  education,
  sectionTitle,
  onSectionTitleChange,
  onAddEducation,
  onFormChange,
  onDeleteFormCard,
}) => {
  const renderSchools = education.map((school) => (
    <EducationCard
      key={school.id}
      school={school}
      onFormChange={onFormChange}
      onDeleteFormCard={onDeleteFormCard}
    />
  ));

  return (
    <section id="school-form" className="edit-section">
      <h1 className="edit-section-title">Your Education</h1>

      <form className="">
        <div className="input-container">
          <span className="label">Section Title</span>
          <input
            type="text"
            name="educationSectionTitle"
            value={sectionTitle}
            onChange={(e) => onSectionTitleChange(e)}
          />
        </div>

        <p className="label section-label">Schools</p>

        {renderSchools}

        <button
          className="add-entry-btn"
          type="button"
          onClick={() => onAddEducation()}
        >
          Add School
        </button>
      </form>
    </section>
  );
};

export default Education;
