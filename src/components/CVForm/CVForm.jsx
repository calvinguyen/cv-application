import '../../assets/css/CVForm.css';
import CVHeader from './CVHeader';
import CVMain from './CVMain';
import CVProfile from './CVProfile';

const CVForm = ({ cv }) => {

  return (
    <section id="cv-form">
      <CVHeader 
        generalInfo={cv.generalInfo}
      />

      {/* Props {
        firstName,
        lastName,
        cvSummary
      } */}
      <CVMain />

      <CVProfile cv={cv} />
    </section>
  );
};

export default CVForm;
