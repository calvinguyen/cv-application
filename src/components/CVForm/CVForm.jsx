import '../../assets/css/CVForm.css';
import CVHeader from './CVHeader';
import CVMain from './CVMain';
import CVProfile from './CVProfile';

const CVForm = () => {

  return (
    <section id="cv-form">
      <CVHeader />
      <CVMain />
      <CVProfile />
    </section>
  );
};

export default CVForm;
