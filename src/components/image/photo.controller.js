export default class imageController {
  constructor(PhotoService, $stateParams) {
    'ngInject';
    this.PhotoService = PhotoService;
    this.imageId = $stateParams.imageId ;
    console.log('hljkh');
  }

  $onInit() {
    console.log('hgfh');
    this.guery = '';
    this.PhotoService.detail(this.imageId).then(image => {this.image = image;
      console.log(this.image);})
  }

}
