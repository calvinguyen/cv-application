import { v4 as uuidv4 } from 'uuid';
import noAvatar from '../assets/images/noAvatar.jpg';

const emptyCV = {
  generalInfo: {
    profilePic: noAvatar,
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
      company: '',
      jobTitle: '',
      location: '',
      startDate: '',
      endDate: '',
      description: [],
    },
  ],

  projectSectionTitle: 'PROJECTS',
  projects: [
    {
      title: '',
      techStack: '',
      projectUrl: '',
      startDate: '',
      endDate: '',
      description: [],
    },
  ],

  organizationSectionTitle: 'ORGANIZATIONS',
  organizations: [
    {
      title: '',
      location: '',
      startDate: '',
      endDate: '',
      description: [],
    },
  ],
};

export default emptyCV;