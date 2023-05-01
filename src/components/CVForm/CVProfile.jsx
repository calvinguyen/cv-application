import '../../assets/css/CVProfile.css';
import GeneralInfo from './Profile/GeneralInfo';
import SocialLinks from './Profile/SocialLinks';
import Skills from './Profile/Skills';
import Hobbies from './Profile/Hobbies';
import Education from './Profile/Education';
import Certifications from './Profile/Certifications';

const CVProfile = () => {
  return (
    <section id="cv-profile">

      {/* Props {
        profilePic,
        currentLocation,
        email,
        personalWebsite
      } */}
      <GeneralInfo />

      {/* Props {
        linkedin,
        github,
        twitter,
        facebook,
        instagram
      } */}
      <SocialLinks />

      {/* Props {
        skillsSectionTitle,
        skillsList []
      } */}
      <Skills />
      
      {/* Props {
        hobbiesSectionTitle,
        hobbiesList []
      } */}
      <Hobbies />
      
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
