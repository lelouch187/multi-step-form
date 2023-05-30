import PageOne from './features/pageOne/PageOne';
import { FC } from 'react';
import PageTwo from './features/pageTwo/PageTwo';

export enum RouteNames {
  PAGEONE = '/2',
  PAGETWO = '/',
}
export interface IRoute {
   path: string;
   element: FC;
   key:string;
}

export const router:IRoute[] = [
  {
    path: RouteNames.PAGEONE,
    element: PageOne,
    key:RouteNames.PAGEONE
  },
  {
   path: RouteNames.PAGETWO,
   element: PageTwo,
   key:RouteNames.PAGETWO
 },
];
