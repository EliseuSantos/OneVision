import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  routes: {
    error404: '404'
  },
  endpoints: {
  },
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/EliseuSantos/OneVision'
};
