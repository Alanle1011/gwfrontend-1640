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
  status:boolean
  userId:number,
  role: string,
  name: string,
  faculty: string,
  email: string
};

export type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
};
export type ImageUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
};
