import FoodSearch from "./FoodSearch.js";
import { FoodSearchItems } from "./FoodSearchData.js";
export default function MainFood(){
   return(
    <section class="py-8 overflow-hidden">
        <div class="container">
          <div class="row flex-center mb-6">
            <div class="col-lg-7">
              <h5 class="fw-bold fs-3 fs-lg-5 lh-sm text-center text-lg-start">Search by Food</h5>
            </div>
            <div class="col-lg-4 text-lg-end text-center"><a class="btn btn-lg text-800 me-2" href="#" role="button">VIEW ALL <i class="fas fa-chevron-right ms-2"></i></a></div>
            <div class="col-lg-auto position-relative">
              <button class="carousel-control-prev s-icon-prev carousel-icon" type="button" data-bs-target="#carouselSearchByFood" data-bs-slide="prev"><span class="carousel-control-prev-icon hover-top-shadow" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>
              <button class="carousel-control-next s-icon-next carousel-icon" type="button" data-bs-target="#carouselSearchByFood" data-bs-slide="next"><span class="carousel-control-next-icon hover-top-shadow" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>
            </div>
          </div>
          <div class="row flex-center">
            <div class="col-12">
              <div class="carousel slide" id="carouselSearchByFood" data-bs-touch="false" data-bs-interval="false">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <div class="row h-100 align-items-center">
                               {
                                    FoodSearchItems.map((v,i,a)=>{
                                        return <FoodSearch key={i} values={v}/>   
                                    })
                                }
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   );
}