import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { httpErrorInterceptor } from './http-interceptors';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './state/cart.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([httpErrorInterceptor])),
    provideStore({ cart: cartReducer }),
    provideStoreDevtools(),
  ],
};
