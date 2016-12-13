import ng from 'angular';

import photoComponent from './photo.component.js';
import PhotoService from '../photo.service.js';

export default ng.module('app.components.photo', [])
 .component('photo', photoComponent)
 .service('PhotoService', PhotoService)
 .name;