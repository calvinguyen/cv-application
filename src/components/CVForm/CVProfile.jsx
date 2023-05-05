import '../../assets/css/CVProfile.css';
import GeneralInfo from './Profile/GeneralInfo';
import SocialLinks from './Profile/SocialLinks';
import Skills from './Profile/Skills';
import Hobbies from './Profile/Hobbies';
import Education from './Profile/Education';
import Certifications from './Profile/Certifications';

const CVProfile = ({cv}) => {
  return (
    <section id="cv-profile">

      <GeneralInfo generalInfo={cv.generalInfo} />

      <SocialLinks socialProfiles={cv.socialProfiles} />

      <Skills 
        skills={cv.skills}
        sectionTitle={cv.skillSectionTitle}
      />

      <Hobbies 
        hobbies={cv.hobbies}
        sectionTitle={cv.hobbySectionTitle}
      />
      
      {/* Props {
        educationSectionTitle,
        educationCard = [
          {
            schoolName,
            schoolLocation,
            startEndDate,
            degree
          },
        ]
      } */}
      <Education />
      
      {/* Props {
        certSectionTitle,
        certCard = [
          {
            certName,
            certDate
          },
        ]
      } */}
      <Certifications />

    </section>
  );
};

export default CVProfile;
