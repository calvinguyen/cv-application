/* eslint-disable react/no-unstable-nested-components */
import '../../assets/css/CVForm.css';

const CVForm = () => {
  function CVHeading() {
    return (
      <section id="cv-heading">
        <h1>FirstName LastName</h1>
        <p>
          Experienced lead full-stack software engineer seekig a position at a mid-
          sized web product startup where I can apply my skills in developing, scaling,
          and maintaining web services in Google Cloud.
        </p>
      </section>
    );
  }

  function CVMain() {
    return (
      <section id="cv-main">
        CV Main Section
      </section>
    )
  }

  function CVProfile() {
    return (
      <section id="cv-profile">
        CV Profile Section
      </section>
    )
  }

  return (
    <section id="cv-form">
      <CVHeading />
      <CVMain />
      <CVProfile />
    </section>
  );
};

export default CVForm;
