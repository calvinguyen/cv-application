const GeneralInfo = ({ generalInfo }) => {
  return (
    <section className="general-info">
      <img src={generalInfo.profilePic} alt="profile" className="profile-pic" />
      <p className="current-location">{generalInfo.location}</p>
      <div className="general-links">
        <p className="phone">{generalInfo.phone}</p>
        <a href="cnguyenr42@gmail.com">{generalInfo.email}</a>
        <a href="http://calvinguyen.com">{generalInfo.personalWebsite}</a>
      </div>
    </section>
  );
};

export default GeneralInfo;
