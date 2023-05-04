// import { useState } from 'react';
import { useImmer } from 'use-immer';
import CVForm from './CVForm/CVForm';
import CVEditBar from './CVEditBar/CVEditBar';
import SideBar from './SideBar';
import emptyCV from '../data/emptyCV';
import exampleCV from '../data/exampleCV';

/* 
  TODO: Hold Form State in Main
  TODO: Pass State props to Form and Edit Form
*/

function Main() {
  const [cv, setCv] = useImmer(emptyCV);

  function handleGeneralInfoChange(e) {
    const {name, value} = e.target;

    setCv(draft => {
      draft.generalInfo[name] = value;
    })
  }
  
  function handleSocialProfileChange(e) {
    const {name, value} = e.target;

    setCv(draft => {
      draft.socialProfiles[name] = value;
    })
  }


  return (
    <main>
      <SideBar />

      <CVEditBar 
        cv={cv}
        onGeneralInfoChange={handleGeneralInfoChange}
        onSocialProfileChange={handleSocialProfileChange}
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
