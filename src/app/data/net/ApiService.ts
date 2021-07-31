import {environment} from '../../../environments/environment';

export class ApiService {
  constructor() {
  }

  public REMOTE_END_POINTS = {
    URL_GET_SUB_BREED: `${environment.BASE_ROUTE_PATH}/breed/hound/list`
  };
}
