export class AppLocalStorage {  
  static readonly TOKEN = 'session-token';  

  static saveToken(token: string) {
    this.setItem(this.TOKEN, token);
  }

  static getToken() {
    return this.getItem(this.TOKEN);
  }

  static removeToken() {
    this.removeItem(this.TOKEN);
  }

  static clearSession() {
    this.removeItem(this.TOKEN);
  }

  /** Safe access to localStorage.setItem */
  private static setItem(key: string, value: any) {
    if (typeof window === "undefined") {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }

  /** Safe access to localStorage.getItem */
  private static getItem(key: string) {
    if (typeof window === "undefined") {
      return null;
    }
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  /** Safe access to localStorage.removeItem */
  private static removeItem(key: string) {
    if (typeof window === "undefined") {
      return;
    }
    localStorage.removeItem(key);
  }

  
}
