export class AppLocalStorage {
  static readonly USER = 'session-user';
  static readonly TOKEN = 'session-token';
  static readonly AUTHENTICATED = 'session-authenticated';

  static saveToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }

  static getToken() {
    return localStorage.getItem(this.TOKEN);
  }

  static removeToken() {
    localStorage.removeItem(this.TOKEN);
  }

  static clearSession() {
    localStorage.removeItem(this.TOKEN);
  }
}
