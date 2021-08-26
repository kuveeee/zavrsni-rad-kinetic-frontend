import * as Icons from '@material-ui/icons';

export const sidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Icons.Dashboard />,
    cName: 'nav-text',
  },
  {
    title: 'Klijenti',
    path: '/klijenti',
    icon: <Icons.People />,
    cName: 'nav-text',
  },
  {
    title: 'Usluge',
    path: '/usluge',
    icon: <Icons.FitnessCenter />,
    cName: 'nav-text',
  },
  {
    title: 'Nova rezervacija',
    path: '/nova-rezervacija',
    icon: <Icons.AddToQueue />,
    cName: 'nav-text',
  },
  {
    title: 'Naplaćivanje',
    path: '/naplacivanje',
    icon: <Icons.AttachMoney />,
    cName: 'nav-text',
  },
];
