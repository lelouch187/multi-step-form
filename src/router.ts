import PageOne from './features/pageOne/PageOne';
import { FC } from 'react';
import PageTwo from './features/pageTwo/PageTwo';

export enum RouteNames {
  PAGEONE = '/',
  PAGETWO = '/2',
}
export interface IRoute {
   path: string;
   element: FC;
}

export const router:IRoute[] = [
  {
    path: RouteNames.PAGEONE,
    element: PageOne,
  },
  {
   path: RouteNames.PAGETWO,
   element: PageTwo,
 },
];
