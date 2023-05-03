const Hobbies = () => {
  return (
    <section className="edit-section">
      <h1 className='edit-section-title'>Your Hobbies</h1>

      <form className=''>
        <div className="input-container">
          <span className="label">Section Title</span>
          <input 
            type="text"
            />
        </div>

        <p className="label section-label">Hobbies</p>

        <div className="skill-input-container">
          <input 
            type="text"
            />
          <button className='x-btn input-x-btn' type='button'>X</button>
        </div>
        <div className="skill-input-container">
          <input 
            type="text"
            />
          <button className='x-btn input-x-btn' type='button'>X</button>
        </div>

        <button className='add-entry-btn' type='button'>
          Add Hobby
        </button>
      </form>
    </section>
  )
}

export default Hobbies