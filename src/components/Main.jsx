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
    const {name, value} = e.target;

    setCv(draft => {
      draft.generalInfo[name] = value;
    })
  }
  
  const handleSocialProfileChange = (e) => {
    const {name, value} = e.target;

    setCv(draft => {
      draft.socialProfiles[name] = value;
    })
  }

  const handleSectionTitleChange = (e) => {
    const {name, value} = e.target;
    
    setCv(draft => {
      draft[name] = value;
    })
  }

  /* SKILL CRUD FUNCTIONS */
  const handleSkillChange = (e, skillId) => {
    const {name, value} = e.target;

    setCv(draft => {
      const index = draft.skills.findIndex(skill => skill.id === skillId);
      if (index !== -1) draft.skills[index][name] = value;
    })
  }

  const handleAddSKill = () => {
    setCv(draft => {
      draft.skills.push({
        id: uuidv4(),
        name: '',
        level: 0,
      })
    })
  }

  const handleDeleteSkill = (skillId) => {
    setCv(draft => {
      const index = draft.skills.findIndex(skill => skill.id === skillId);
      if (index !== -1) draft.skills.splice(index, 1);
    })
  }

  /* HOBBIES CRUD FUNCTIONS */
  const handleHobbyChange = (e, hobbyId) => {
    const {name, value} = e.target;

    setCv(draft => {
      const index = draft.hobbies.findIndex(hobby => hobby.id === hobbyId);
      if (index !== -1) draft.hobbies[index][name] = value;
    })
  }

  const handleAddHobby = () => {
    setCv(draft => {
      draft.hobbies.push({
        id: uuidv4(),
        name: '',
      })
    })
  }

  const handleDeleteHobby = (hobbyId) => {
    setCv(draft => {
      const index = draft.hobbies.findIndex(hobby => hobby.id === hobbyId);
      if (index !== -1) draft.hobbies.splice(index, 1);
    })
  }

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
      />

      <div id="cv-form-container">
        <CVForm 
          cv={cv}
        />
      </div>
    </main>
  );
}

export default Main;
