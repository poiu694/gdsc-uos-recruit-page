import { AdminService } from './AdminService';

class AuthService extends AdminService {
  constructor() {
    super('');
  }

  login() {
    return this.request({
      method: 'POST',
      url: `/oauth2/authorization/google`,
    });
  }

  redirect() {
    return this.request({
      method: 'GET',
      url: '/home',
    });
  }

  isLogin() {
    return this.request<boolean>({
      method: 'GET',
      url: '/isLogin',
    });
  }

  logout() {
    return this.request({
      method: 'POST',
      url: '/logout',
    });
  }
}

export default new AuthService();
