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

  skillSectionTitle: 'Technologies',
  skills: [
    {
      id: uuidv4(),
      skill: '',
      level: '',
    },
  ],

  hobbySectionTitle: 'Technical Skills',
  hobbies: [
    {
      id: uuidv4(),
      name: '',
    },
  ],

  educationSectionTitle: 'Education',
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

  certificationSectionTitle: 'Certifications',
  certifications: [
    {
      id: uuidv4(),
      name: '',
      date: '',
    },
  ],

  experienceSectionTitle: 'Work Experience',
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

  projectSectionTitle: 'Projects',
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

  organizationSectionTitle: 'Organizations',
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