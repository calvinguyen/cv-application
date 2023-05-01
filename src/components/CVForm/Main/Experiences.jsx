import { v4 as uuidv4 } from 'uuid';
import ExperienceCard from "./ExperienceCard";

const props = {
  experienceSectionTitle: 'WORK EXPERIENCE',
  cardExperience: [
    {
      company: 'Google',
      jobTitle: 'Senior Software Engineer',
      location: 'Boston, MA',
      startDate: 'January 2016',
      endDate: 'Present',
      description: [
        `Wrote modular, secure, and well-tested code in Python, React, and Go that is currently being
        used by millions of daily users.`,
        `Partnered with product managers, designers, and analysts to deeply understand the needs of users
        and build a file sharing product that serves those needs.`,
        `Led a team of engineers to build infrastructure to handle metadata for hundreds of billions of files,
        hundreds of petabytes of user data, and millions of concurrent connections.`
      ]
    },
    {
      company: 'Stack Overflow',
      jobTitle: 'Software Engineer',
      location: 'Boston, MA',
      startDate: 'September 2014',
      endDate: 'December 2015',
      description: [
        `Built software in ReactJS and NodeJS using Test Driven Development.`,
        `Work in an agile software development team to complete various epics through sprints,
        working in conjunction with other developers and engineers from external companies.`,
        `Helped formulate and document software development best practices for the team by
        sharing example code changes from various development & product teams.`
      ]
    },
  ]
}

const Experiences = () => {
  const experienceCards = props.cardExperience.map(card => {
    return (
      <ExperienceCard 
        key={uuidv4()}
        cardInfo={card} />
    );
  })

  return (
    <section className="experiences">
      <h1 className="section-title">{props.experienceSectionTitle}</h1>

      {/* Experience Card goes here */}
      {/* <ExperienceCard 
        cardInfo={props.cardExperience[0]}
      />

      <ExperienceCard 
        cardInfo={props.cardExperience[1]}
      /> */}
      {experienceCards}

    </section>
  );
};

export default Experiences;
