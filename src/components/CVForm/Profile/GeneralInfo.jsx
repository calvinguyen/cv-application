import noAvatar from '../../../assets/images/noAvatar.jpg';

const GeneralInfo = () => {
  return (
    <section className="general-info">
      <img src={noAvatar} alt="profile" className="profile-pic" />
      <p className="current-location">San Fancisco</p>
      <div className="general-links">
        <a href="cnguyenr42@gmail.com">cnguyenr42@gmail.com</a>
        <a href="http://calvinguyen.com">http://calvinguyen.com</a>
      </div>
    </section>
  );
};

export default GeneralInfo;
