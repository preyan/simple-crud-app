interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Comment {
  id: number;
  body: string;
  postId: number;
}

interface Profile {
  name: string;
}

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  gender: string;
  education: string;
  company: string;
  experience: number;
  package: number;
}

interface DB {
  posts: Post[];
  comments: Comment[];
  profile: Profile;
  employees: Employee[];
}

export { Post, Comment, Profile, Employee, DB };
