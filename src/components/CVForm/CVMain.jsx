import Experiences from './Main/Experiences';
import Projects from './Main/Projects';
import Organizations from './Main/Organizations';
import '../../assets/css/CVMain.css';

const CVMain = ({ cv }) => {
  return (
    <section id="cv-main">
      {cv.experiences.length ? (
        <Experiences
          experiences={cv.experiences}
          sectionTitle={cv.experienceSectionTitle}
        />
      ) : null}

      {cv.projects.length ? (
        <Projects
          projects={cv.projects}
          sectionTitle={cv.projectSectionTitle}
        />
      ) : null}

      {cv.organizations.length ? (
        <Organizations
          organizations={cv.organizations}
          sectionTitle={cv.organizationSectionTitle}
        />
      ) : null}
    </section>
  );
};

export default CVMain;
