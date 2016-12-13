import ng from 'angular';

import Photos from './photos';
import Photo from './image';
import Album from './album';

export default ng.module('app.components', [Photos, Photo, Album])
.name;
