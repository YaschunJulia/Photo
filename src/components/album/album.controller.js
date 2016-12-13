export default class albumController {
  constructor(PhotoService, $stateParams) {
    'ngInject';
    this.PhotoService = PhotoService;
    this.albumId = $stateParams.albumId ;
  }

  $onInit() {
    this.query = '';
    this.PhotoService.getAlbum(this.albumId).then(photos => this.photos = photos)
  }

}
