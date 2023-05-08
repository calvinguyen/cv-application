import { forwardRef } from 'react';
import '../../assets/css/CVForm.css';
import CVHeader from './CVHeader';
import CVMain from './CVMain';
import CVProfile from './CVProfile';

const CVForm = forwardRef(({ cv }, ref) => {
  return (
    <section id="cv-form" ref={ref}>
      <CVHeader generalInfo={cv.generalInfo} />

      <CVMain cv={cv} />

      <CVProfile cv={cv} />
    </section>
  );
});

export default CVForm;
