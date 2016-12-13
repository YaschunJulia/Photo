export default class photosController {
  constructor(PhotoService) {
    'ngInject';
    this.PhotoService = PhotoService;
  }

  $onInit() {
    this.guery = '';
    this.page = 1;
    this.isNext = false;
    this.isScrolled = false;
    this.photos = [];
    this.scrollMove();
    this.getPhotos(this.page);
  }

  getPhotos(page) {
    this.PhotoService.list(page).then(photos => {
      if (this.photos.length) {
        this.photos = this.photos.concat(photos);  
      } else {
        this.photos = photos;
      }
    }); 
  }

  paging() {
    this.page += 1;
    console.log(this.page);
    this.getPhotos(this.page);
  }

  scrollMove() {
    window.onscroll = () => {
      if (window.pageYOffset > window.innerHeight) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
  }

  goAbove() { 
     let timer = setInterval(() => (document.body.scrollTop > 100) ? document.body.scrollTop -= 200 : clearInterval(timer) , 50); 
  }

}
