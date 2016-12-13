export default class PhotoService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  list(page) {
    return this.$http.get(`${API}photos?_page=${page}&_limit=20`).then(result => result.data);
  }

  detail(id) {
    return this.$http.get(`${API}photos/${id}`).then(result => result.data);
  }

  getAlbum(id) {
    return this.$http.get(`${API}albums/${id}/photos`).then(result => result.data);
  }

}
