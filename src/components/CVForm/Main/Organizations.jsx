import OrganizationCard from './OrganizationCard';

const Organizations = ({ organizations, sectionTitle }) => {
  const cards = organizations.map((card) => {
    return <OrganizationCard key={card.id} organization={card} />;
  });

  return (
    <section className="organizations">
      <h1 className="section-title">{sectionTitle}</h1>
      {cards}
    </section>
  );
};

export default Organizations;
