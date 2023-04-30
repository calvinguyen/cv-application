const Experiences = () => {
  return (
    <section className="experiences">
      <h1 className="section-title">WORK EXPERIENCE</h1>

      {/* Experience Card goes here */}
      <div className="card">
        <p className="card-title">Senior Software Engineer, Google</p>
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

      <div className="card">
        <p className="card-title">Software Engineer, Stack Overflow</p>
        <p className="card-subtitle">Boston, MA &#8226; September 2014 — December 2015</p>
        <ul className="card-description">
          <li>
            Built software in ReactJS and NodeJS using Test Driven Development.
          </li>
          <li>
            Work in an agile software development team to complete various epics through sprints,
            working in conjunction with other developers and engineers from external companies.
          </li>
          <li>
            Helped formulate and document software development best practices for the team by
            sharing example code changes from various development & product teams.
          </li>
        </ul>
      </div>

    </section>
  );
};

export default Experiences;
