const Card = ({
  project,
  onFormChange,
  onDeleteFormCard,
  onDescriptionChange,
  onAddDescription,
  onDeleteDescription,
}) => {
  const BulletPoints = project.description.map((desc) => (
    <div key={desc.id} className="skill-input-container">
      <input
        type="text"
        value={desc.desc}
        onChange={(e) =>
          onDescriptionChange(e, desc.id, 'projects', project.id)
        }
      />
      <button
        className="x-btn input-x-btn"
        type="button"
        onClick={() => onDeleteDescription(desc.id, 'projects', project.id)}
      >
        X
      </button>
    </div>
  ));

  return (
    <section className="form-card">
      <button
        className="x-btn"
        type="button"
        onClick={() => onDeleteFormCard(project.id, 'projects')}
      >
        X
      </button>
      <div className="input-container">
        <p className="label">Title</p>
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={(e) => onFormChange(e, project.id, 'projects')}
        />
      </div>
      <div className="input-container">
        <p className="label">Tech Stack</p>
        <input
          type="text"
          name="techStack"
          value={project.techStack}
          onChange={(e) => onFormChange(e, project.id, 'projects')}
        />
      </div>
      <div className="input-container">
        <p className="label">Project URL</p>
        <input
          type="text"
          name="projectUrl"
          value={project.projectUrl}
          onChange={(e) => onFormChange(e, project.id, 'projects')}
        />
      </div>
      <div className="two-col">
        <div className="input-container">
          <p className="label">Start Date</p>
          <input
            type="text"
            name="startDate"
            value={project.startDate}
            onChange={(e) => onFormChange(e, project.id, 'projects')}
          />
        </div>
        <div className="input-container">
          <p className="label">End Date</p>
          <input
            type="text"
            name="endDate"
            value={project.endDate}
            onChange={(e) => onFormChange(e, project.id, 'projects')}
          />
        </div>
      </div>
      <div className="input-container">
        <p className="label">Description</p>
        {BulletPoints}
      </div>
      <button
        className="add-desc-btn"
        type="button"
        onClick={() => onAddDescription('projects', project.id)}
      >
        Add Bullet Point
      </button>
    </section>
  );
};

const Projects = ({
  projects,
  sectionTitle,
  onSectionTitleChange,
  onDescriptionChange,
  onAddDescription,
  onDeleteDescription,
  onFormChange,
  onAddProject,
  onDeleteFormCard,
}) => {
  const renderCards = projects.map((card) => (
    <Card
      key={card.id}
      project={card}
      onFormChange={onFormChange}
      onDeleteFormCard={onDeleteFormCard}
      onDescriptionChange={onDescriptionChange}
      onAddDescription={onAddDescription}
      onDeleteDescription={onDeleteDescription}
    />
  ));

  return (
    <section id="projects-form" className="edit-section">
      <h1 className="edit-section-title">Your Projects</h1>

      <form className="">
        <div className="input-container">
          <span className="label">Section Title</span>
          <input
            type="text"
            name="projectSectionTitle"
            value={sectionTitle}
            onChange={(e) => onSectionTitleChange(e)}
          />
        </div>

        <p className="label section-label">Projects</p>
        {renderCards}

        <button
          className="add-entry-btn"
          type="button"
          onClick={() => onAddProject()}
        >
          Add Project
        </button>
      </form>
    </section>
  );
};

export default Projects;
