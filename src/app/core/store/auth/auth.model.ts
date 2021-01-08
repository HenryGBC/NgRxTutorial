export interface AuthState {
  isLogged: boolean | null;
  token: string | null;
  hasRedirect: boolean | null;
  hasErrorLogin: boolean | null;
  errorMessageLogin: string | null;
}
