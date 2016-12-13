import ng from 'angular';

import albumComponent from './album.component.js';
import PhotoService from '../photo.service.js';

export default ng.module('app.components.album', [])
 .component('album', albumComponent)
 .service('PhotoService', PhotoService)
 .name;