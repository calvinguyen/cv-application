import '../../assets/css/CVHeader.css';

const CVHeader = ({ generalInfo }) => {
  return (
    <section id="cv-header">
      <h1>{`${generalInfo.firstName} ${generalInfo.lastName}`}</h1>
      <p>{generalInfo.cvSummary}</p>
    </section>
  );
};

export default CVHeader;
