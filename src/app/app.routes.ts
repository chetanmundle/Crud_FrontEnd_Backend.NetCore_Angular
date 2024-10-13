import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { GetApiFetchComponent } from './Components/get-api-fetch/get-api-fetch.component';
import { PostApiFetchComponent } from './Components/post-api-fetch/post-api-fetch.component';
import { PutApiFetchComponent } from './Components/put-api-fetch/put-api-fetch.component';
import { DeleteApiFetchComponent } from './Components/delete-api-fetch/delete-api-fetch.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'get-api',
    component: GetApiFetchComponent,
  },
  {
    path: 'post-api',
    component: PostApiFetchComponent,
  },
  {
    path: 'put-api',
    component: PutApiFetchComponent,
  },
  {
    path: 'delete-api',
    component: DeleteApiFetchComponent,
  },
];
