const HobbyItem = ({ hobby, onDeleteFormCard, onFormChange }) => {
  return (
    <div className="skill-input-container">
      <input
        type="text"
        name="name"
        value={hobby.name}
        onChange={(e) => onFormChange(e, hobby.id, 'hobbies')}
      />
      <button
        className="x-btn input-x-btn"
        type="button"
        onClick={() => onDeleteFormCard(hobby.id, 'hobbies')}
      >
        X
      </button>
    </div>
  );
};

const Hobbies = ({
  hobbies,
  sectionTitle,
  onSectionTitleChange,
  onAddHobby,
  onFormChange,
  onDeleteFormCard,
}) => {
  const renderHobbies = hobbies.map((hobby) => (
    <HobbyItem
      key={hobby.id}
      hobby={hobby}
      onFormChange={onFormChange}
      onDeleteFormCard={onDeleteFormCard}
    />
  ));

  return (
    <section id="hobbies-form" className="edit-section">
      <h1 className="edit-section-title">Your Hobbies</h1>

      <form className="">
        <div className="input-container">
          <span className="label">Section Title</span>
          <input
            type="text"
            name="hobbySectionTitle"
            value={sectionTitle}
            onChange={(e) => onSectionTitleChange(e)}
          />
        </div>

        <p className="label section-label">Hobbies</p>
        {renderHobbies}

        <button
          className="add-entry-btn"
          type="button"
          onClick={() => onAddHobby()}
        >
          Add Hobby
        </button>
      </form>
    </section>
  );
};

export default Hobbies;
