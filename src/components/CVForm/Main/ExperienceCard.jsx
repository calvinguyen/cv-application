import { v4 as uuidv4 } from 'uuid';

const ExperienceCard = ({ cardInfo }) => {
  const {
    company,
    jobTitle,
    location,
    startDate,
    endDate,
    description
  } = cardInfo;
  
  const bulletPoints = description.map(item => {
    return <li key={uuidv4()}>{ item }</li>;
  })

  return (
    <div className="card">
      <p className="card-title">{jobTitle}, {company}</p>
      <p className="card-subtitle">{location} &#8226; {startDate} - {endDate}</p>
      <ul className="card-description">
        {bulletPoints}
      </ul>
    </div>
  );
};

export default ExperienceCard;
