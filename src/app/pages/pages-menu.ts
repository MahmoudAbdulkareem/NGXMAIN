import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },

  {
    title: 'FEATURES',
    group: true,
  },

  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: ' Donnees de la fiche ',
        link: '/pages/forms/inputs',
      },
      {
        title: ' Donnees d’entete ',
        link: '/pages/forms/layouts',
      },
      {
        title: ' Site d’Achat ',
        link: '/pages/forms/buttons',
      },

    ],
  },

  {
    title: 'Pop Ups',
    icon: 'browser-outline',
    children: [
      {
        title: 'Perimetre',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Validation',
        link: '/pages/modal-overlays/window',
      },


    ],
  },


  {
    title: 'Bannettes De Suivi',
    icon: 'grid-outline',
    children: [
      {
        title: 'Mes taches en cours',
        link: '/pages/tables/smart-table',
      },

      {
        title: 'Toutes demandes',
        link: '/pages/tables/tree-grid',
      },

    ],
  },
  
  {
    title: 'Back-Up Bannette',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Back-Up',
        link: '/pages/charts/echarts',
      },

    ],
  },


  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth SSO',
    icon: 'lock-outline',
    children: [
      {
        title: 'Se connecter',
        link: '/auth/login',
      },
      {
        title: 'Registre',
        link: '/auth/register',
      },
      {
        title: 'Demander un mot de passe',
        link: '/auth/request-password',
      },
      {
        title: 'Réinitialiser le mot de passe',
        link: '/auth/reset-password',
      },
    ],
  },
];
