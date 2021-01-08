import { User } from '../../models/user';

export interface UserState {
  user: User | null;
  loading: boolean;
}
