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
  onAddHobby,
  onAddEducation,
  onAddCertification,
  onAddExperience,
  onDescriptionChange,
  onAddDescription,
  onDeleteDescription,
  onFormChange,
  onAddProject,
  onDeleteFormCard,
  onAddOrganization,
}) => {
  return (
    <section id="cv-edit-bar">
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
        onFormChange={onFormChange}
        onDeleteFormCard={onDeleteFormCard}
      />

      <Hobbies
        hobbies={cv.hobbies}
        sectionTitle={cv.hobbySectionTitle}
        onSectionTitleChange={onSectionTitleChange}
        onAddHobby={onAddHobby}
        onFormChange={onFormChange}
        onDeleteFormCard={onDeleteFormCard}
      />

      <Education
        education={cv.education}
        sectionTitle={cv.educationSectionTitle}
        onSectionTitleChange={onSectionTitleChange}
        onAddEducation={onAddEducation}
        onFormChange={onFormChange}
        onDeleteFormCard={onDeleteFormCard}
      />

      <Experiences
        experiences={cv.experiences}
        sectionTitle={cv.experienceSectionTitle}
        onSectionTitleChange={onSectionTitleChange}
        onAddExperience={onAddExperience}
        onDescriptionChange={onDescriptionChange}
        onAddDescription={onAddDescription}
        onDeleteDescription={onDeleteDescription}
        onFormChange={onFormChange}
        onDeleteFormCard={onDeleteFormCard}
      />

      <Projects
        projects={cv.projects}
        sectionTitle={cv.projectSectionTitle}
        onSectionTitleChange={onSectionTitleChange}
        onDescriptionChange={onDescriptionChange}
        onAddDescription={onAddDescription}
        onDeleteDescription={onDeleteDescription}
        onFormChange={onFormChange}
        onAddProject={onAddProject}
        onDeleteFormCard={onDeleteFormCard}
      />

      <Organizations
        organizations={cv.organizations}
        sectionTitle={cv.organizationSectionTitle}
        onSectionTitleChange={onSectionTitleChange}
        onDescriptionChange={onDescriptionChange}
        onAddDescription={onAddDescription}
        onDeleteDescription={onDeleteDescription}
        onFormChange={onFormChange}
        onAddOrganization={onAddOrganization}
        onDeleteFormCard={onDeleteFormCard}
      />

      <Certifications
        certifications={cv.certifications}
        sectionTitle={cv.certificationSectionTitle}
        onSectionTitleChange={onSectionTitleChange}
        onAddCertification={onAddCertification}
        onFormChange={onFormChange}
        onDeleteFormCard={onDeleteFormCard}
      />
    </section>
  );
};

export default CVEditBar;
