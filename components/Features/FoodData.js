
export default function FoodData({Items}){
    return(
            <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div className="card card-span h-100 text-white rounded-3"><img className="img-fluid rounded-3 h-100" src={Items.image}alt="..." />
                <div className="card-img-overlay ps-0"><span className="badge bg-danger p-2 ms-3"><i className="fas fa-tag me-2 fs-0"></i><span className="fs-0">{Items. offerDiscount}</span></span><span className="badge bg-primary ms-2 me-1 p-2"><i className="fas fa-clock me-1 fs-0"></i><span className="fs-0">{Items.tags}</span></span></div>
                <div className="card-body ps-0">
                  <div className="d-flex align-items-center mb-3"><img className="img-fluid" src={Items.logo} alt="" />
                    <div className="flex-1 ms-3">
                      <h5 className="mb-0 fw-bold text-1000">{Items.name}</h5><span className="text-primary fs--1 me-1"><i className="fas fa-star"></i></span><span className="mb-0 text-primary">{Items.rating}</span>
                    </div>
                  </div><span className="badge bg-soft-success p-2"><span className="fw-bold fs-1 text-danger">{Items.schedule}</span></span>
                </div>
              </div>
            </div>  
    );
}