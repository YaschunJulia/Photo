import ng from 'angular';

import photosComponent from './photos.component.js';
import PhotoService from '../photo.service.js';

export default ng.module('app.components.photos', [])
 .component('photos', photosComponent)
 .service('PhotoService', PhotoService)
 .name;