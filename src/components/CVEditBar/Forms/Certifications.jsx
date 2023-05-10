const CertCard = ({ certification, onFormChange, onDeleteFormCard }) => {
  return (
    <section className="form-card">
      <button
        className="x-btn"
        type="button"
        onClick={() => onDeleteFormCard(certification.id, 'certifications')}
      >
        X
      </button>
      <div className="input-container">
        <p className="label">Name</p>
        <input
          type="text"
          name="name"
          value={certification.name}
          onChange={(e) => onFormChange(e, certification.id, 'certifications')}
        />
      </div>
      <div className="input-container">
        <p className="label">Date</p>
        <input
          type="text"
          name="date"
          value={certification.date}
          onChange={(e) => onFormChange(e, certification.id, 'certifications')}
        />
      </div>
    </section>
  );
};

const Certifications = ({
  certifications,
  sectionTitle,
  onSectionTitleChange,
  onAddCertification,
  onFormChange,
  onDeleteFormCard,
}) => {
  const renderCerts = certifications.map((cert) => (
    <CertCard
      key={cert.id}
      certification={cert}
      onFormChange={onFormChange}
      onDeleteFormCard={onDeleteFormCard}
    />
  ));

  return (
    <section id="certs-form" className="edit-section">
      <h1 className="edit-section-title">Your Certifications</h1>

      <form className="">
        <div className="input-container">
          <span className="label">Section Title</span>
          <input
            type="text"
            name="certificationSectionTitle"
            value={sectionTitle}
            onChange={(e) => onSectionTitleChange(e)}
          />
        </div>

        <p className="label section-label">Certifications</p>
        {renderCerts}

        <button
          className="add-entry-btn"
          type="button"
          onClick={() => onAddCertification()}
        >
          Add Certification
        </button>
      </form>
    </section>
  );
};

export default Certifications;
