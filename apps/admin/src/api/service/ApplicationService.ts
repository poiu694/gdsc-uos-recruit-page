import { AdminService } from './AdminService';

class ApplicationService extends AdminService {
  constructor() {
    super('application');
  }

  getApplicationBySeason(season: string) {
    return this.request({
      method: 'GET',
      url: `/${season}`,
    });
  }
}

export default new ApplicationService();
