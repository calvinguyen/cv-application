const ExperienceCard = ({ work }) => {
  
  const bulletPoints = work.description.map(item => {
    return <li key={item.id}>{ item.desc }</li>;
  })

  return (
    <div className="card">
      <p className="card-title">{work.jobTitle}, {work.company}</p>
      <p className="card-subtitle">{work.location} &#8226; {work.startDate} - {work.endDate}</p>
      <ul className="card-description">
        {bulletPoints}
      </ul>
    </div>
  );
};

export default ExperienceCard;
