import { Newsletter } from './Pages/Newsletter';
import { Unsubscribe } from './Pages/Unsubscribe';

export const Routes = [
  {
    path: '/',
    element: <Newsletter />,
  },
  {
    path: '/unsubscribe',
    element: <Unsubscribe />,
  },
];
