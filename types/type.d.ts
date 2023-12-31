export interface Image {
  url: string;
}

export interface Project {
  id: string;
  createdAt: string;
  title: string;
  tag: string;
  description: string;
  github: string;
  liveLink: string;
  image: Image;
}

export interface Skill {
  id: string;
  skills: string;
  image: Image;
}

export interface EmailTemplateProps {
  firstName: string;
  subject: string;
  message: string;
}
