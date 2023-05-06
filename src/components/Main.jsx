import { useImmer } from 'use-immer';
import { v4 as uuidv4 } from 'uuid';
import CVForm from './CVForm/CVForm';
import CVEditBar from './CVEditBar/CVEditBar';
import SideBar from './SideBar';
import emptyCV from '../data/emptyCV';
// import exampleCV from '../data/exampleCV';

/* 
  TODO: Hold Form State in Main
  TODO: Pass State props to Form and Edit Form
*/

const Main = () => {
  const [cv, setCv] = useImmer(emptyCV);

  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;

    setCv((draft) => {
      draft.generalInfo[name] = value;
    });
  };

  const handleSocialProfileChange = (e) => {
    const { name, value } = e.target;

    setCv((draft) => {
      draft.socialProfiles[name] = value;
    });
  };

  const handleSectionTitleChange = (e) => {
    const { name, value } = e.target;

    setCv((draft) => {
      draft[name] = value;
    });
  };

  /* SKILL CRUD FUNCTIONS */
  const handleSkillChange = (e, skillId) => {
    const { name, value } = e.target;

    setCv((draft) => {
      const index = draft.skills.findIndex((skill) => skill.id === skillId);
      if (index !== -1) draft.skills[index][name] = value;
    });
  };

  const handleAddSKill = () => {
    setCv((draft) => {
      draft.skills.push({
        id: uuidv4(),
        name: '',
        level: 0,
      });
    });
  };

  const handleDeleteSkill = (skillId) => {
    setCv((draft) => {
      const index = draft.skills.findIndex((skill) => skill.id === skillId);
      if (index !== -1) draft.skills.splice(index, 1);
    });
  };

  /* HOBBIES CRUD FUNCTIONS */
  const handleHobbyChange = (e, hobbyId) => {
    const { name, value } = e.target;

    setCv((draft) => {
      const index = draft.hobbies.findIndex((hobby) => hobby.id === hobbyId);
      if (index !== -1) draft.hobbies[index][name] = value;
    });
  };

  const handleAddHobby = () => {
    setCv((draft) => {
      draft.hobbies.push({
        id: uuidv4(),
        name: '',
      });
    });
  };

  const handleDeleteHobby = (hobbyId) => {
    setCv((draft) => {
      const index = draft.hobbies.findIndex((hobby) => hobby.id === hobbyId);
      if (index !== -1) draft.hobbies.splice(index, 1);
    });
  };

  /* EDUCATION CRUD FUNCTIONS */
  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;

    setCv((draft) => {
      const index = draft.education.findIndex(
        (education) => education.id === id
      );
      if (index !== -1) draft.education[index][name] = value;
    });
  };

  const handleAddEducation = () => {
    setCv((draft) => {
      draft.education.push({
        id: uuidv4(),
        schoolName: '',
        location: '',
        startDate: '',
        endDate: '',
        gpa: '',
        degree: '',
      });
    });
  };

  const handleDeleteEducation = (id) => {
    setCv((draft) => {
      const index = draft.education.findIndex(
        (education) => education.id === id
      );
      if (index !== -1) draft.education.splice(index, 1);
    });
  };

  /* CERTIFICATIONS CRUD FUNCTIONS */
  const handleCertificationChange = (e, id) => {
    const { name, value } = e.target;

    setCv((draft) => {
      const index = draft.certifications.findIndex(
        (certification) => certification.id === id
      );
      if (index !== -1) draft.certifications[index][name] = value;
    });
  };

  const handleAddCertification = () => {
    setCv((draft) => {
      draft.certifications.push({
        id: uuidv4(),
        name: '',
        date: '',
      });
    });
  };

  const handleDeleteCertification = (id) => {
    setCv((draft) => {
      const index = draft.certifications.findIndex(
        (certification) => certification.id === id
      );
      if (index !== -1) draft.certifications.splice(index, 1);
    });
  };

  /* EXPERIENCES CRUD FUNCTIONS */
  const handleExperienceChange = (e, id) => {
    const { name, value } = e.target;

    setCv((draft) => {
      const index = draft.experiences.findIndex(
        (experience) => experience.id === id
      );
      if (index !== -1) draft.experiences[index][name] = value;
    });
  };

  const handleAddExperience = () => {
    setCv((draft) => {
      draft.experiences.push({
        id: uuidv4(),
        company: '',
        jobTitle: '',
        location: '',
        startDate: '',
        endDate: '',
        description: [
          {
            id: uuidv4(),
            desc: '',
          }
        ],
      });
    });
  };

  const handleDeleteExperience = (id) => {
    setCv((draft) => {
      const index = draft.experiences.findIndex(
        (experience) => experience.id === id
      );
      if (index !== -1) draft.experiences.splice(index, 1);
    });
  };

  /* PROJECTS CRUD FUNCTIONS */
  const handleFormChange = (e, id, sectionId) => {
    const { name, value } = e.target;

    setCv((draft) => {
      const index = draft[sectionId].findIndex(
        (item) => item.id === id
      );
      if (index !== -1) draft[sectionId][index][name] = value;
    });
  };

  const handleAddProject = () => {
    setCv((draft) => {
      draft.projects.push({
        id: uuidv4(),
        title: '',
        techStack: '',
        projectUrl: '',
        startDate: '',
        endDate: '',
        description: [
          {
            id: uuidv4(),
            desc: '',
          }
        ],
      });
    });
  };

  const handleDeleteFormCard = (id, sectionId) => {
    setCv((draft) => {
      const index = draft[sectionId].findIndex(
        (item) => item.id === id
      );
      if (index !== -1) draft[sectionId].splice(index, 1);
    });
  };

  /* Add Organization */
  const handleAddOrganization = () => {
    setCv((draft) => {
      draft.organizations.push({
        id: uuidv4(),
        title: '',
        location: '',
        startDate: '',
        endDate: '',
        description: [
          {
            id: uuidv4(),
            desc: '',
          }
        ],
      });
    });
  };

  /* Description Bullet Points */
  const handleDescriptionChange = (e, id, sectionId, listId) => {
    const { value } = e.target;

    setCv((draft) => {
      const sectionListIndex = draft[sectionId].findIndex(
        (list) => list.id === listId
      );
      const index = draft[sectionId][sectionListIndex].description.findIndex(
        (desc) => desc.id === id
      );
      if (index !== -1) draft[sectionId][sectionListIndex].description[index].desc = value;
    });
  };

  const handleAddDescription = (sectionId, listId) => {

    setCv((draft) => {
      const sectionListIndex = draft[sectionId].findIndex(
        (list) => list.id === listId
      );
      draft[sectionId][sectionListIndex].description.push({
        id: uuidv4(),
        desc: '',
      })
    });
  };
  const handleDeleteDescription = (descId, sectionId, listId) => {

    setCv((draft) => {
      const sectionListIndex = draft[sectionId].findIndex(
        (list) => list.id === listId
      );
      const index = draft[sectionId][sectionListIndex].description.findIndex(
        (desc) => desc.id === descId
      );
      if (index !== -1) draft[sectionId][sectionListIndex].description.splice(index, 1);
    });
  };

  return (
    <main>
      <SideBar />

      <CVEditBar
        cv={cv}
        onGeneralInfoChange={handleGeneralInfoChange}
        onSocialProfileChange={handleSocialProfileChange}
        onSectionTitleChange={handleSectionTitleChange}
        onAddSkill={handleAddSKill}
        onSkillChange={handleSkillChange}
        onDeleteSkill={handleDeleteSkill}
        onHobbyChange={handleHobbyChange}
        onAddHobby={handleAddHobby}
        onDeleteHobby={handleDeleteHobby}
        onEducationChange={handleEducationChange}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onCertificationChange={handleCertificationChange}
        onAddCertification={handleAddCertification}
        onDeleteCertification={handleDeleteCertification}
        onExperienceChange={handleExperienceChange}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onDescriptionChange={handleDescriptionChange}
        onAddDescription={handleAddDescription}
        onDeleteDescription={handleDeleteDescription}
        onFormChange={handleFormChange}
        onAddProject={handleAddProject}
        onDeleteFormCard={handleDeleteFormCard}
        onAddOrganization={handleAddOrganization}
      />

      <div id="cv-form-container">
        <CVForm cv={cv} />
      </div>
    </main>
  );
};

export default Main;
