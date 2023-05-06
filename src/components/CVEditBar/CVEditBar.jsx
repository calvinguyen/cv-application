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
  onSectionTitleChange,
  onAddSkill,
  onSkillChange,
  onDeleteSkill,
  onHobbyChange,
  onAddHobby,
  onDeleteHobby,
  onEducationChange,
  onAddEducation,
  onDeleteEducation,
  onCertificationChange,
  onAddCertification,
  onDeleteCertification,
  onExperienceChange,
  onAddExperience,
  onDeleteExperience,
  onDescriptionChange,
  onAddDescription,
  onDeleteDescription,
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
        onAddSkill={onAddSkill}
        onSkillChange={onSkillChange}
        onDeleteSkill={onDeleteSkill}
      />

      <Hobbies
        hobbies={cv.hobbies}
        sectionTitle={cv.hobbySectionTitle}
        onSectionTitleChange={onSectionTitleChange}
        onHobbyChange={onHobbyChange}
        onAddHobby={onAddHobby}
        onDeleteHobby={onDeleteHobby}
      />

      <Education 
        education={cv.education}
        sectionTitle={cv.educationSectionTitle}
        onSectionTitleChange={onSectionTitleChange}
        onEducationChange={onEducationChange}
        onAddEducation={onAddEducation}
        onDeleteEducation={onDeleteEducation}
      />

      <Experiences
        experiences={cv.experiences}
        sectionTitle={cv.experienceSectionTitle}
        onSectionTitleChange={onSectionTitleChange}
        onExperienceChange={onExperienceChange}
        onAddExperience={onAddExperience}
        onDeleteExperience={onDeleteExperience}
        onDescriptionChange={onDescriptionChange}
        onAddDescription={onAddDescription}
        onDeleteDescription={onDeleteDescription}
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

      <Certifications 
        certifications={cv.certifications}
        sectionTitle={cv.certificationSectionTitle}
        onSectionTitleChange={onSectionTitleChange}
        onCertificationChange={onCertificationChange}
        onAddCertification={onAddCertification}
        onDeleteCertification={onDeleteCertification}
      />
      
    </section>
  )
}

export default CVEditBar