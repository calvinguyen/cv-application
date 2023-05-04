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
  onSocialProfileChange,
  onSectionTitleChange
}) => {
  return (
    <section id='cv-edit-bar'>
      <h1 className="edit-bar-title">Editing CV</h1>
      
      <Profile 
        generalInfo={cv.generalInfo} 
        onGeneralInfoChange={onGeneralInfoChange}
      />

      <SocialProfiles 
        socialProfiles={cv.socialProfiles}
        onSocialProfileChange={onSocialProfileChange}
      />
      
      <Skills 
        skills={cv.skills}
        sectionTitle={cv.skillSectionTitle}
        onSectionTitleChange={onSectionTitleChange}
      />

      {/* Props {
        hobbiesSectionTitle,
        hobbies: [],
      } */}
      <Hobbies 
        onSectionTitleChange={onSectionTitleChange}
      />

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
      <Education 
        onSectionTitleChange={onSectionTitleChange}
      />

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
      <Experiences 
        onSectionTitleChange={onSectionTitleChange}
      />

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
      <Projects 
        onSectionTitleChange={onSectionTitleChange}
      />
      
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
      <Organizations 
        onSectionTitleChange={onSectionTitleChange}
      />

      {/* Props {
        certificationSectionTitle,
        certifications: [
          {
            name,
            date,
          },
        ]
      } */}
      <Certifications 
        onSectionTitleChange={onSectionTitleChange}
      />
      
    </section>
  )
}

export default CVEditBar