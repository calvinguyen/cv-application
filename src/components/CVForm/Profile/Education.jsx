const EducationCard = ({ school }) => {
  return (
    <div className="card">
      <p className="card-title">{school.schoolName}</p>
      <p className="education-location-date">
        {school.location} &#8226; {`${school.startDate} - ${school.endDate}`}
      </p>
      <p className="education-location-date"> {`GPA: ${school.gpa}`} </p>
      <p className="card-subtitle-education">{school.degree}</p>
    </div>
  );
};

const Education = ({ education, sectionTitle }) => {
  const renderEducationCards = education.map((school) => (
    <EducationCard key={school.id} school={school} />
  ));

  return (
    <section className="education">
      <h1 className="section-title section-title-profile">{sectionTitle}</h1>

      {renderEducationCards}
    </section>
  );
};

export default Education;
