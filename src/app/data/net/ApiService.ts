import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {
  }

  public REMOTE_END_POINTS = {
    URL_GET_SUB_BREED: `${environment.BASE_ROUTE_PATH}/breed`,
    URL_GET_LIST_BREEDS: `${environment.BASE_ROUTE_PATH}/breeds/list/all`
  };
}
