export default class imageController {
  constructor(PhotoService, $stateParams) {
    'ngInject';
    this.PhotoService = PhotoService;
    this.imageId = $stateParams.imageId ;
  }

  $onInit() {
    this.query = '';
    this.PhotoService.detail(this.imageId).then(image => this.image = image)
  }

}
