const Hobbies = ({ hobbies, sectionTitle }) => {
  const renderHobbies = hobbies.map((hobby) => (
    <p key={hobby.id} className="hobbies-item">
      {hobby.name}
    </p>
  ));

  return (
    <section className="hobbies">
      <h1 className="section-title section-title-profile">{sectionTitle}</h1>

      <div className="hobbies-item-container">{renderHobbies}</div>
    </section>
  );
};

export default Hobbies;
