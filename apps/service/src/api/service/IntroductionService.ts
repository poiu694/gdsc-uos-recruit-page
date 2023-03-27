import { TeamKeyType } from '@gdsc-uos/ui';
import { ServiceAPI } from './ServiceAPI';

import type { ResponseIntroduction } from '@types';

class IntroductionService extends ServiceAPI {
  constructor() {
    super('introduction');
  }

  getIntroductionByType = (type: TeamKeyType): Promise<ResponseIntroduction> => {
    return this.request({
      method: 'GET',
      url: `/${type}`,
    });
  };
}

export default new IntroductionService();
