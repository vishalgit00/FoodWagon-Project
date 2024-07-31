export default function Product(props){
    return(
    <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
        <div className="card card-span h-100 rounded-3">
            <img
            className="img-fluid rounded-3 h-100"
            src={props.image}
            alt="..."
            />
            <div className="card-body ps-0">
            <h5 className="fw-bold text-1000 text-truncate mb-1">
                {props.name}
            </h5>
            <div>
                <span className="text-warning me-2">
                <i className="fas fa-map-marker-alt" />
                </span>
                <span className="text-primary">{props.category}</span>
            </div>
            <span className="text-1000 fw-bold">${props.price}</span>
            </div>
        </div>
        <div className="d-grid gap-2">
            <a
            className="btn btn-lg btn-danger"
            href="#!"
            role="button"
            >
            Order now
            </a>
        </div>
    </div>

    );
  }

  
         
        
      