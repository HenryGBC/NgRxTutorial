export interface User {
  fullName: string;
  avatar: string;
  role: string;
  description: string;
  countLinks: number;
  password: string | null;
}

export interface UserState {
  loading: boolean;
  user: User | null;
}
