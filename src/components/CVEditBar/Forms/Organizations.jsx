const Card = ({
  organization,
  onFormChange,
  onDeleteFormCard,
  onDescriptionChange,
  onAddDescription,
  onDeleteDescription,
}) => {
  const BulletPoints = organization.description.map((desc) => (
    <div key={desc.id} className="skill-input-container">
      <input
        type="text"
        value={desc.desc}
        onChange={(e) =>
          onDescriptionChange(e, desc.id, 'organizations', organization.id)
        }
      />
      <button
        className="x-btn input-x-btn"
        type="button"
        onClick={() =>
          onDeleteDescription(desc.id, 'organizations', organization.id)
        }
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
        onClick={() => onDeleteFormCard(organization.id, 'organizations')}
      >
        X
      </button>
      <div className="input-container">
        <p className="label">Title</p>
        <input
          type="text"
          name="title"
          value={organization.title}
          onChange={(e) => onFormChange(e, organization.id, 'organizations')}
        />
      </div>
      <div className="input-container">
        <p className="label">Location</p>
        <input
          type="text"
          name="location"
          value={organization.location}
          onChange={(e) => onFormChange(e, organization.id, 'organizations')}
        />
      </div>
      <div className="two-col">
        <div className="input-container">
          <p className="label">Start Date</p>
          <input
            type="text"
            name="startDate"
            value={organization.startDate}
            onChange={(e) => onFormChange(e, organization.id, 'organizations')}
          />
        </div>
        <div className="input-container">
          <p className="label">End Date</p>
          <input
            type="text"
            name="endDate"
            value={organization.endDate}
            onChange={(e) => onFormChange(e, organization.id, 'organizations')}
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
        onClick={() => onAddDescription('organizations', organization.id)}
      >
        Add Bullet Point
      </button>
    </section>
  );
};

const Organizations = ({
  organizations,
  sectionTitle,
  onSectionTitleChange,
  onDescriptionChange,
  onAddDescription,
  onDeleteDescription,
  onFormChange,
  onAddOrganization,
  onDeleteFormCard,
}) => {
  const renderCards = organizations.map((card) => (
    <Card
      key={card.id}
      organization={card}
      onFormChange={onFormChange}
      onDeleteFormCard={onDeleteFormCard}
      onDescriptionChange={onDescriptionChange}
      onAddDescription={onAddDescription}
      onDeleteDescription={onDeleteDescription}
    />
  ));

  return (
    <section id="orgs-form" className="edit-section">
      <h1 className="edit-section-title">Your Organizations</h1>

      <form className="">
        <div className="input-container">
          <span className="label">Section Title</span>
          <input
            type="text"
            name="organizationSectionTitle"
            value={sectionTitle}
            onChange={(e) => onSectionTitleChange(e)}
          />
        </div>

        <p className="label section-label">Organizations</p>
        {renderCards}

        <button
          className="add-entry-btn"
          type="button"
          onClick={() => onAddOrganization()}
        >
          Add Organization
        </button>
      </form>
    </section>
  );
};

export default Organizations;
