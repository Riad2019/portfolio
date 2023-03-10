interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  name: string;
  phoneNumber: string;
  heroImage: Image;
  profilePic: Image;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
export interface Technology extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
}
export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  image: image;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuildString: string;
  summary: string;
  technologies: Technology[];
}
export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentWorkingHere: boolean;

  jobTitle: string;
  points: string[];
  technologies: Technology[];
}
