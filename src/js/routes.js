
import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';
import FormPage from '../pages/form.f7.html';
import CatalogPage from '../pages/catalog.f7.html';
import ProductPage from '../pages/product.f7.html';
import SettingsPage from '../pages/settings.f7.html';

import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import TipsPertama from '../pages/tips-pertama.f7.html';
import TipsKedua from '../pages/tips-kedua.f7.html';
import Beranda from '../pages/beranda.f7.html';
import Negara from '../pages/negara.f7.html';
import DetailNegara from '../pages/detail-negara.f7.html';
import Provinsi from '../pages/provinsi.f7.html';
import DetailProvinsi from '../pages/detail-provinsi.f7.html';
import Tentang from '../pages/tentang.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/tips-pertama/',
    component: TipsPertama,
  },
  {
    path: '/tips-kedua/',
    component: TipsKedua,
  },
  {
    path: '/beranda/',
    component: Beranda,
  },
  {
    path: '/negara/',
    component: Negara,
  },
  {
    path: '/detail-negara/:id/',
    component: DetailNegara,
  },
  {
    path: '/provinsi/',
    component: Provinsi,
  },
  {
    path: '/detail-provinsi/:id/',
    component: DetailProvinsi,
  },
  {
    path: '/tentang/',
    component: Tentang,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;