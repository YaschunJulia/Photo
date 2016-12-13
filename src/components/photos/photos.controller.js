export default class photosController {
  constructor(PhotoService, $element) {
    'ngInject';
    this.PhotoService = PhotoService;
    this.element = $element[0];
  }

  $onInit() {
    this.query = '';
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
    this.getPhotos(this.page);
  }

  scrollMove() {
    window.onscroll = () => {
      console.log(this.isScrolled);
      if (window.pageYOffset > window.innerHeight) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
  }

  goAbove() { 
     let timer = setInterval(() => {
       if (document.body.scrollTop > 0) {
          document.body.scrollTop -= 200;
       } else {
         clearInterval(timer);
         this.isScrolled = false;
         this.element.querySelector('#above').click();
       } 
     }, 50); 
  }

}
