import ng from 'angular';

import ngRoute from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import ngInfiniteScroll from'ng-infinite-scroll/build/ng-infinite-scroll.min.js'

import './assets/styles/style.scss';
import ngComponents from './components';

ng.module('app', [ngRoute, ngComponents, ngInfiniteScroll])
.config(($locationProvider, $stateProvider) => {
  'ngInject';
  $locationProvider.html5Mode(true);
  const states = [
    {
      name: 'home',
      url: '/',
      component: 'photos'
    },
    {
      name: 'photo', 
      url: 'image/{imageId}', 
      component: 'photo',
      params: {
        imageId: null,
      }
    },
    {
      name: 'album', 
      url: 'album/{albumId}', 
      component: 'album',
      params: {
        albumId: null
      }
    }

  ];

  states.forEach(state => $stateProvider.state(state));
});
