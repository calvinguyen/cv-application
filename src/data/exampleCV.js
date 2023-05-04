import { v4 as uuidv4 } from 'uuid';
import noAvatar from '../assets/images/noAvatar.jpg';

const emptyCV = {
  generalInfo: {
    profilePic: noAvatar,
    firstName: 'John',
    lastName: 'Smith',
    phone: '281-965-9232',
    email: 'cnguyenr42@gmail.com',
    location: 'Houston, TX',
    personalWebsite: 'http://calvinguyen.com',
    cvSummary: `Experienced lead full-stack software engineer seeking a position at a
    mid-sized web product startup where I can apply my skills in developing,
    scaling, and maintaining web services in Google Cloud.`,
  },

  socialProfiles: {
    linkedIn: 'linkedin.com/in/calvintnguyen',
    twitter: 'twitter.com/calvinguyen',
    facebook: 'facebook.com/user',
    instagram: 'instagram.com/user',
    github: 'github.com/calvinguyen',
  },

  skillSectionTitle: 'Technologies',
  skills: [
    {
      id: uuidv4(),
      skill: 'ReactJS',
      level: 80,
    },
    {
      id: uuidv4(),
      skill: 'Jest',
      level: 100,
    },
    {
      id: uuidv4(),
      skill: 'ExpressJS',
      level: 100,
    },
    {
      id: uuidv4(),
      skill: 'Jupyter Notebook',
      level: 100,
    },
    {
      id: uuidv4(),
      skill: 'Django',
      level: 100,
    },
  ],

  hobbySectionTitle: 'Technical Skills',
  hobbies: [
    {
      id: uuidv4(),
      name: 'JavaScript',
    },
    {
      id: uuidv4(),
      name: 'Python',
    },
    {
      id: uuidv4(),
      name: 'Ruby',
    },
    {
      id: uuidv4(),
      name: 'Scala',
    },
    {
      id: uuidv4(),
      name: 'Go',
    },
    {
      id: uuidv4(),
      name: 'HTML',
    },
    {
      id: uuidv4(),
      name: 'CSS',
    },
    {
      id: uuidv4(),
      name: 'Ansible',
    },
  ],

  educationSectionTitle: 'Education',
  education: [
    {
      id: uuidv4(),
      schoolName: 'The University of Texas at Austin',
      location: 'Austin, TX',
      startDate: '2010',
      endDate: '2014',
      gpa: '4.0',
      degree: 'B.S. Computer Science',
    },
  ],

  certificationSectionTitle: 'Certifications',
  certifications: [
    {
      id: uuidv4(),
      name: 'Developing Applications with Google Cloud Platform',
      date: 'Offered by Google Cloud, 2014',
    },
  ],

  experienceSectionTitle: 'Work Experience',
  experiences: [
    {
      company: 'Google',
      jobTitle: 'Senior Software Engineer',
      location: 'Boston, MA',
      startDate: 'January 2016',
      endDate: 'Present',
      description: [
        {
          id: uuidv4(),
          text: ``
        },
        {
          id: uuidv4(),
          text: ``
        },
        {
          id: uuidv4(),
          text: ``
        },
      ],
    },
  ],

  projectSectionTitle: 'Projects',
  projects: [
    {
      title: 'The Social Network',
      techStack: 'MERN Stack',
      projectUrl: 'github.com',
      startDate: 'March 2014',
      endDate: 'June 2015',
      description: [
        {
          id: uuidv4(),
          text: ``
        },
        {
          id: uuidv4(),
          text: ``
        },
        {
          id: uuidv4(),
          text: ``
        },
      ],
    },
  ],

  organizationSectionTitle: 'Organizations',
  organizations: [
    {
      title: 'Honor Society',
      location: 'Boston, MA',
      startDate: 'March 2014',
      endDate: 'June 2015',
      description: [
        {
          id: uuidv4(),
          text: ``
        },
        {
          id: uuidv4(),
          text: ``
        },
        {
          id: uuidv4(),
          text: ``
        },
      ],
    },
  ],
};

export default emptyCV;