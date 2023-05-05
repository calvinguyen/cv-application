const CertCard = ({
  certification,
  onCertificationChange,
  onDeleteCertification,
}) => {
  return (
    <section className="form-card">
      <button
        className="x-btn"
        type="button"
        onClick={() => onDeleteCertification(certification.id)}
      >
        X
      </button>
      <div className="input-container">
        <p className="label">Name</p>
        <input
          type="text"
          name="name"
          value={certification.name}
          onChange={(e) => onCertificationChange(e, certification.id)}
        />
      </div>
      <div className="input-container">
        <p className="label">Date</p>
        <input
          type="text"
          name="date"
          value={certification.date}
          onChange={(e) => onCertificationChange(e, certification.id)}
        />
      </div>
    </section>
  );
};

const Certifications = ({
  certifications,
  sectionTitle,
  onSectionTitleChange,
  onCertificationChange,
  onAddCertification,
  onDeleteCertification,
}) => {
  const renderCerts = certifications.map((cert) => (
    <CertCard
      key={cert.id}
      certification={cert}
      onCertificationChange={onCertificationChange}
      onDeleteCertification={onDeleteCertification}
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
