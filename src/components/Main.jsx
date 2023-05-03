import CVForm from './CVForm/CVForm';
import CVEditBar from './CVEditBar/CVEditBar';
import SideBar from './SideBar';

/* 
  TODO: Hold Form State in Main
  TODO: Pass State props to Form and Edit Form
*/

function Main() {
  return (
    <main>
      <SideBar />
      <CVEditBar />
      <div id="cv-form-container">
        <CVForm />
      </div>
    </main>
  );
}

export default Main;
