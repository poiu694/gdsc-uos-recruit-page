import { AdminService } from './AdminService';

class AuthService extends AdminService {
  constructor() {
    super('');
  }

  login() {
    return this.request<void>({
      method: 'POST',
      url: `/oauth2/authorization/google`,
    });
  }

  isLogin() {
    return this.request<boolean>({
      method: 'GET',
      url: '/isLogin',
    });
  }

  logout() {
    return this.request<void>({
      method: 'POST',
      url: '/logout',
    });
  }

  redirect() {
    return this.request({
      method: 'GET',
      url: '/home',
    });
  }

}

export default new AuthService();
