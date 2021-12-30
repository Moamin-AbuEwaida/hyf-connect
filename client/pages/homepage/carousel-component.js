const CarouselComponent = {
  template: `
  <div class="carousel">
  <h2 class="carousel__title">see what we have achieved as HYF community!</h2>
  <h3 class="carousel__subtittle">and many more projects to build...</h3>
  <div class="container">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="/images/homepage/projectcard_class13-14_handandpaw.png" alt="First slide">
          <h2 class="slide__tittle">hand and paw / class 13-14</h2>
          <p class="slide__description">Hand and paw makes animal adoption easier <br> for people, shelters and animals.</p>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/images/homepage/projectcard_class13-14_readeer.png" alt="Second slide">
          <h2 class="slide__tittle">readeer / class 13-14</h2>
          <p class="slide__description">Readeer promotes reading and sharing <br> books among children and parents.</p>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="client/images/homepage/projectcard_class11-12_just4giving.png" alt="Third slide">
          <h2 class="slide__tittle">just4giving / class 11-12</h2>
          <p class="slide__description">Just4Giving connect those who wants <br> to share with others in need.</p>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/images/homepage/projectcard_class11-12_helpy.png" alt="Fourth slide">
          <h2 class="slide__tittle">helpy / class 11-12</h2>
          <p class="slide__description">Helpy is a sharing platform, its goal is to link those people who need help with their groceries to volunteers who are willing to help.</p>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/images/homepage/projectcard_class9-10_hearmystory.png" alt="Fifth slide">
          <h2 class="slide__tittle">hearmystory / class 9-10</h2>
          <p class="slide__description"> <br>Be heard in your words, on your own terms.</p>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <a class="carousel__projects--btn" href="">see all the projects</a>
</div>
`
}

export default CarouselComponent; 