import {FoodImages} from "./FoodItems";
import FoodData from "./FoodData";
export default function Food(){
    return(
    <section id="testimonial">
        <div class="container">
          <div class="row h-100">
            <div class="col-lg-7 mx-auto text-center mb-6">
              <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Featured Restaurants</h5>
            </div>
          </div>
               <div className="row gx-2"> 
                  
                {
                    FoodImages.map((v,i,a)=>{
                        return <FoodData key={i} Items = {v} />

                        })
                }
                </div>      
          </div>
          <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-primary" href="#!">View All <i className="fas fa-chevron-right ms-2"> </i></a></div>
    </section>
    );
}
