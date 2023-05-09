import { v4 as uuidv4 } from 'uuid';
import noAvatar from '../assets/images/noAvatar.jpg';

const emptyCV = {
  generalInfo: {
    profilePic: noAvatar,
    firstName: 'John',
    lastName: 'Smith',
    phone: '123-456-7890',
    email: 'johnsmith@gmail.com',
    location: 'Houston, TX',
    personalWebsite: 'http://johnsmith.com',
    cvSummary: `Experienced lead full-stack software engineer seeking a position at a
    mid-sized web product startup where I can apply my skills in developing,
    scaling, and maintaining web services in Google Cloud.`,
  },

  socialProfiles: {
    linkedIn: 'linkedin.com/in/user',
    twitter: 'twitter.com/user',
    facebook: '',
    instagram: '',
    github: 'github.com/user',
  },

  skillSectionTitle: 'TECHNOLOGIES',
  skills: [
    {
      id: uuidv4(),
      name: 'ReactJS',
      level: 80,
    },
    {
      id: uuidv4(),
      name: 'Jest',
      level: 100,
    },
    {
      id: uuidv4(),
      name: 'ExpressJS',
      level: 100,
    },
    {
      id: uuidv4(),
      name: 'Jupyter Notebook',
      level: 100,
    },
    {
      id: uuidv4(),
      name: 'Django',
      level: 100,
    },
  ],

  hobbySectionTitle: 'TECHNICAL SKILLS',
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

  educationSectionTitle: 'EDUCATION',
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

  certificationSectionTitle: 'CERTIFICATIONS',
  certifications: [
    {
      id: uuidv4(),
      name: 'Developing Applications with Google Cloud Platform',
      date: 'Offered by Google Cloud, 2014',
    },
  ],

  experienceSectionTitle: 'WORK EXPERIENCE',
  experiences: [
    {
      id: uuidv4(),
      company: 'Google',
      jobTitle: 'Senior Software Engineer',
      location: 'Boston, MA',
      startDate: 'January 2016',
      endDate: 'Present',
      description: [
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, aliquam nemo quae labore temporibus impedit ut necessitatibus minima sequi possimus voluptatum rerum nisi.`,
        },
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, aliquam nemo quae labore temporibus impedit ut necessitatibus minima sequi possimus voluptatum rerum nisi.`,
        },
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, aliquam nemo quae labore temporibus impedit ut necessitatibus minima sequi possimus voluptatum rerum nisi.`,
        },
      ],
    },
    {
      id: uuidv4(),
      company: 'Stack Overflow',
      jobTitle: 'Software Engineer',
      location: 'Boston, MA',
      startDate: 'September 2014',
      endDate: 'December 2015',
      description: [
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, aliquam nemo quae labore temporibus impedit ut necessitatibus minima sequi possimus voluptatum rerum nisi.`,
        },
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, aliquam nemo quae labore temporibus impedit ut necessitatibus minima sequi possimus voluptatum rerum nisi.`,
        },
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, aliquam nemo quae labore temporibus impedit ut necessitatibus minima sequi possimus voluptatum rerum nisi.`,
        },
      ],
    },
  ],

  projectSectionTitle: 'PROJECTS',
  projects: [
    {
      id: uuidv4(),
      title: 'The Social Network',
      techStack: 'MERN Stack',
      projectUrl: 'github.com',
      startDate: 'March 2014',
      endDate: 'June 2015',
      description: [
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, aliquam nemo quae labore temporibus.`,
        },
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, aliquam nemo quae labore temporibus.`,
        },
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, aliquam nemo quae labore temporibus.`,
        },
      ],
    },
  ],

  organizationSectionTitle: 'ORGANIZATIONS',
  organizations: [
    {
      id: uuidv4(),
      title: 'Honor Society',
      location: 'Boston, MA',
      startDate: 'March 2014',
      endDate: 'June 2015',
      description: [
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
        },
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
        },
        {
          id: uuidv4(),
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
        },
      ],
    },
  ],
};

export default emptyCV;
