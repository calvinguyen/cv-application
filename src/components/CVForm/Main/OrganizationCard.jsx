const OrganizationCard = ({ organization }) => {
  const bulletPoints = organization.description.map((item) => {
    return <li key={item.id}>{item.desc}</li>;
  });

  return (
    <div className="card">
      <p className="card-title">{organization.title}</p>
      <p className="card-subtitle">
        {organization.location} &#8226; {organization.startDate} —{' '}
        {organization.endDate}
      </p>
      <ul className="card-description">{bulletPoints}</ul>
    </div>
  );
};

export default OrganizationCard;
