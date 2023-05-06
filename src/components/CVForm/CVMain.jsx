import Experiences from './Main/Experiences';
import Projects from './Main/Projects';
import Organizations from './Main/Organizations';
import '../../assets/css/CVMain.css';

const CVMain = ({cv}) => {
  return (
    <section id="cv-main">
      
      <Experiences 
        experiences={cv.experiences}
        sectionTitle={cv.experienceSectionTitle}
      />

      <Projects 
        projects={cv.projects}
        sectionTitle={cv.projectSectionTitle}
      />

      <Organizations 
        organizations={cv.organizations}
        sectionTitle={cv.organizationSectionTitle}
      />
    </section>
  );
};

export default CVMain;
