import Experiences from './Main/Experiences';
import Projects from './Main/Projects';
import Organizations from './Main/Organizations';
import '../../assets/css/CVMain.css';

const CVMain = () => {
  return (
    <section id="cv-main">
      <Experiences />

      <Projects />

      <Organizations />
    </section>
  );
};

export default CVMain;
