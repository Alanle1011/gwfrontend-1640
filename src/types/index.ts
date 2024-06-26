export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type INewContribution = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUpdateContribution = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
};

export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type ILoginUser = {
  status: boolean
  userId: number,
  imageId: string,
  role: string,
  name: string,
  faculty: string,
  email: string
};

export type FileUploaderProps = {
  fieldChange: (files?: File[]) => void;
  contribution?: any;
};
export type ImageUploaderProps = {
  fieldChange: (files?: File[]) => void;
  mediaUrl: string;
  removeMediaUrl: () => void;
};

export type Contribution = {
  id: string,
  uploadedUserId: string,
  title: string,
  content: string,
  imageId: string,
  documentId: string,
  status: string,
  submissionPeriodId: string,
}
export type Faculty = {
  id: number;
  facultyName: string;
  coordinatorId: string;
};

export type EditContribution = {
  title: string,
  content: string,
  imageId: string,
  documentId: string,
}

export type User = {
  id: string,
  name: string,
  imageId: string,
  faculty: string,
  email: string,
  userRole: string,
}

export type EditUser = {
  name: string
  faculty: string
  email: string,
  userRole: string,
}