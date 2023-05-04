import '../../assets/css/CVEditBar.css';
import Profile from './Forms/Profile';
import SocialProfiles from './Forms/SocialProfiles';
import Skills from './Forms/Skills';
import Hobbies from './Forms/Hobbies';
import Education from './Forms/Education';
import Experiences from './Forms/Experiences';
import Projects from './Forms/Projects';
import Organizations from './Forms/Organizations';
import Certifications from './Forms/Certifications';

const CVEditBar = ({ 
  cv, 
  onGeneralInfoChange,
  onSocialProfileChange 
}) => {
  return (
    <section id='cv-edit-bar'>
      <h1 className="edit-bar-title">Editing CV</h1>
      
      <Profile 
        generalInfo={cv.generalInfo} 
        onGeneralInfoChange={onGeneralInfoChange}
      />

      {/* Props {
        linkedIn,
        twitter,
        facebook,
        instagram,
        github,
      } */}
      <SocialProfiles 
        socialProfiles={cv.socialProfiles}
        onSocialProfileChange={onSocialProfileChange}
      />
      
      {/* Props {
        skillSectionTitle,
        skills: [
          {
            skillName,
            progressBarVal
          }
        ],
      } */}
      <Skills />

      {/* Props {
        hobbiesSectionTitle,
        hobbies: [],
      } */}
      <Hobbies />

      {/* Props {
        educationSectionTitle,
        schools: [
          {
            schoolName,
            location,
            startDate,
            endDate,
            gpa,
            degree
          },
        ]
      } */}
      <Education />

      {/* Props {
        experienceSectionTitle,
        experiences: [
          {
            company,
            jobTitle,
            location,
            startDate,
            endDate,
            description: [bulletPoint, ...]
          },
        ]
      } */}
      <Experiences />

      {/* Props {
        projectSectionTitle,
        projects: [
          {
            title,
            techStack,
            projectUrl,
            startDate,
            endDate,
            description: [bulletPoint, ...]
          },
        ]
      } */}
      <Projects />
      
      {/* Props {
        organizationSectionTitle,
        organizations: [
          {
            title,
            location,
            startDate,
            endDate,
            description: [bulletPoint, ...]
          },
        ]
      } */}
      <Organizations />

      {/* Props {
        certificationSectionTitle,
        certifications: [
          {
            name,
            date,
          },
        ]
      } */}
      <Certifications />
      
    </section>
  )
}

export default CVEditBar