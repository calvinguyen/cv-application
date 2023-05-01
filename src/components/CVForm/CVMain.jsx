import Experiences from './Main/Experiences';
import Projects from './Main/Projects';
import Organizations from './Main/Organizations';
import '../../assets/css/CVMain.css';

const CVMain = () => {
  return (
    <section id="cv-main">
      {/* Props {
        experienceSectionTitle,
        cardExperience: [
          {
            company,
            jobTitle,
            location,
            startDate,
            endDate,
            description: [
              bulletPoint, ...,
            ]
          }
        ]
      } */}
      <Experiences />

      {/* Props {
        projectSectionTitle,
        cardProject: [
          {
            title,
            techStack,
            projectLink,
            startDate,
            endDate,
            description: [
              bulletPoint, ...,
            ]
          }
        ]
      } */}
      <Projects />

      {/* Props {
        organizationSectionTitle,
        cardOrganization: [
          {
            title,
            location,
            startDate,
            endDate,
            description: [
              bulletPoint, ...,
            ]
          }
        ]
      } */}
      <Organizations />
    </section>
  );
};

export default CVMain;
