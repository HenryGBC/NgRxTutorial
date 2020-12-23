export interface User {
  fullName: string;
  avatar: string;
  role: string;
  description: string;
  countLinks: number;
}

export interface UserState {
  loading: boolean;
  user: User | null;
}
