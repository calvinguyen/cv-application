import '../../assets/css/CVProfile.css';
import GeneralInfo from './Profile/GeneralInfo';
import SocialLinks from './Profile/SocialLinks';
import Skills from './Profile/Skills';
import Hobbies from './Profile/Hobbies';
import Education from './Profile/Education';
import Certifications from './Profile/Certifications';

const CVProfile = ({ cv }) => {
  return (
    <section id="cv-profile">
      <GeneralInfo generalInfo={cv.generalInfo} />

      <SocialLinks socialProfiles={cv.socialProfiles} />

      {cv.skills.length ? (
        <Skills skills={cv.skills} sectionTitle={cv.skillSectionTitle} />
      ) : null}

      {cv.hobbies.length ? (
        <Hobbies hobbies={cv.hobbies} sectionTitle={cv.hobbySectionTitle} />
      ) : null}

      {cv.education.length ? (
        <Education
          education={cv.education}
          sectionTitle={cv.educationSectionTitle}
        />
      ) : null}

      {cv.certifications.length ? (
        <Certifications
          certifications={cv.certifications}
          sectionTitle={cv.certificationSectionTitle}
        />
      ) : null}
    </section>
  );
};

export default CVProfile;
