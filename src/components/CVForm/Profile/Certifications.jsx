const CertCard = ({ cert }) => {
  return (
    <div className="card card-certification">
      <p className="title-cert">{cert.name}</p>
      <p className="subtitle-cert">{cert.date}</p>
    </div>
  );
};

const Certifications = ({ certifications, sectionTitle }) => {
  const renderCerts = certifications.map((cert) => (
    <CertCard key={cert.id} cert={cert} />
  ));

  return (
    <section className="certifications">
      <h1 className="section-title section-title-profile">{sectionTitle}</h1>
      {renderCerts}
    </section>
  );
};

export default Certifications;
