import CVForm from './CVForm/CVForm';
import CVEditForm from './CVEditForm/CVEditForm';

/* 
  TODO: Hold Form State in Main
  TODO: Pass State props to Form and Edit Form
*/

function Main() {
  return (
    <main>
      <CVEditForm />
      <CVForm />
    </main>
  );
}

export default Main;
