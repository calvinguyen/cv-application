const ExperienceCard = () => {
  return (
    <div className="card">
      <p className="card-title company">Senior Software Engineer, Google</p>
      <p className="card-subtitle">Boston, MA &#8226; January 2016 - Present</p>
      <ul className="card-description">
        <li>
            Wrote modular, secure, and well-tested code in Python, React, and Go that is currently being
            used by millions of daily users.
        </li>
        <li>
          Partnered with product managers, designers, and analysts to deeply understand the needs of users
          and build a file sharing product that serves those needs.
        </li>
        <li>
          Led a team of engineers to build infrastructure to handle metadata for hundreds of billions of files,
          hundreds of petabytes of user data, and millions of concurrent connections.
        </li>
      </ul>
    </div>
  )
}

export default ExperienceCard