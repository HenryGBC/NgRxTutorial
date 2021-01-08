export interface AuthState {
  isLogged: boolean;
  token: string | null;
  hasErrorLogin: boolean | null;
  errorMessageLogin: string | null;
}
