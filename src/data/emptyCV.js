import { v4 as uuidv4 } from 'uuid';

const emptyCV = {
  generalInfo: {
    profilePic: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
    personalWebsite: '',
    cvSummary: '',
  },

  socialProfiles: {
    linkedIn: '',
    twitter: '',
    facebook: '',
    instagram: '',
    github: '',
  },

  skillSectionTitle: 'TECHNOLOGIES',
  skills: [
    {
      id: uuidv4(),
      name: '',
      level: 50,
    },
  ],

  hobbySectionTitle: 'TECHNICAL SKILLS',
  hobbies: [
    {
      id: uuidv4(),
      name: '',
    },
  ],

  educationSectionTitle: 'EDUCATION',
  education: [
    {
      id: uuidv4(),
      schoolName: '',
      location: '',
      startDate: '',
      endDate: '',
      gpa: '',
      degree: '',
    },
  ],

  certificationSectionTitle: 'CERTIFICATIONS',
  certifications: [
    {
      id: uuidv4(),
      name: '',
      date: '',
    },
  ],

  experienceSectionTitle: 'WORK EXPERIENCE',
  experiences: [
    {
      id: uuidv4(),
      company: '',
      jobTitle: '',
      location: '',
      startDate: '',
      endDate: '',
      description: [
        {
          id: uuidv4(),
          desc: '',
        }
      ],
    },
  ],

  projectSectionTitle: 'PROJECTS',
  projects: [
    {
      id: uuidv4(),
      title: '',
      techStack: '',
      projectUrl: '',
      startDate: '',
      endDate: '',
      description: [
        {
          id: uuidv4(),
          desc: '',
        }
      ],
    },
  ],

  organizationSectionTitle: 'ORGANIZATIONS',
  organizations: [
    {
      id: uuidv4(),
      title: '',
      location: '',
      startDate: '',
      endDate: '',
      description: [
        {
          id: uuidv4(),
          desc: '',
        }
      ],
    },
  ],
};

export default emptyCV;