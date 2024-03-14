import {strings} from '@/localization';

export class UserController {
  static async login({username, password}) {
    setTimeout(() => {
      if (username && password) return {username};
      else throw 'error';
    }, 500);
  }

  static async logout() {
    setTimeout(() => {
      return 'logged out';
    }, 500);
  }
}
