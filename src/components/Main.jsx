import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useImmer } from 'use-immer';
import { v4 as uuidv4 } from 'uuid';
import CVForm from './CVForm/CVForm';
import CVEditBar from './CVEditBar/CVEditBar';
import SideBar from './SideBar';
import emptyCV from '../data/emptyCV';
import exampleCV from '../data/exampleCV';

const Main = () => {
  const [cv, setCv] = useImmer(exampleCV);

  /* PDF Print Logic */
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  /* Handle Profile Changes */
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
  const handleAddSKill = () => {
    setCv((draft) => {
      draft.skills.push({
        id: uuidv4(),
        name: '',
        level: 0,
      });
    });
  };

  /* HOBBIES CRUD FUNCTIONS */
  const handleAddHobby = () => {
    setCv((draft) => {
      draft.hobbies.push({
        id: uuidv4(),
        name: '',
      });
    });
  };

  /* EDUCATION CRUD FUNCTIONS */
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

  /* CERTIFICATIONS CRUD FUNCTIONS */
  const handleAddCertification = () => {
    setCv((draft) => {
      draft.certifications.push({
        id: uuidv4(),
        name: '',
        date: '',
      });
    });
  };

  /* EXPERIENCES CRUD FUNCTIONS */
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
          },
        ],
      });
    });
  };

  /* PROJECTS CRUD FUNCTIONS */
  const handleFormChange = (e, id, sectionId) => {
    const { name, value } = e.target;

    setCv((draft) => {
      const index = draft[sectionId].findIndex((item) => item.id === id);
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
          },
        ],
      });
    });
  };

  const handleDeleteFormCard = (id, sectionId) => {
    setCv((draft) => {
      const index = draft[sectionId].findIndex((item) => item.id === id);
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
          },
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
      if (index !== -1)
        draft[sectionId][sectionListIndex].description[index].desc = value;
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
      });
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
      if (index !== -1)
        draft[sectionId][sectionListIndex].description.splice(index, 1);
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
        onAddHobby={handleAddHobby}
        onAddEducation={handleAddEducation}
        onAddCertification={handleAddCertification}
        onAddExperience={handleAddExperience}
        onDescriptionChange={handleDescriptionChange}
        onAddDescription={handleAddDescription}
        onDeleteDescription={handleDeleteDescription}
        onFormChange={handleFormChange}
        onAddProject={handleAddProject}
        onDeleteFormCard={handleDeleteFormCard}
        onAddOrganization={handleAddOrganization}
      />

      <div id="cv-form-container">
        <div className="preview-btn-container">
          <button className="print-btn load-pdf-btn" type="button" onClick={() => setCv(exampleCV)}>
            LOAD EXAMPLE
          </button>
          <button className="print-btn" type="button" onClick={handlePrint}>
            PRINT PDF
          </button>
          <button className="print-btn clear-pdf-btn" type="button" onClick={() => setCv(emptyCV)}>
            CLEAR PDF
          </button>
        </div>
        
        <CVForm cv={cv} ref={componentRef} />
      </div>
    </main>
  );
};

export default Main;
