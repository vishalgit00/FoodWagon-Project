export default function CardData(cardData){
    console.log(cardData.indexKey)
    return (
        <div className="row justify-content-center">
            {
                (cardData.indexKey % 2  == 0) ? 
                    <div className="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1">
                        <img className="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-end rounded-md-top-0" src={cardData.card.image} alt="..." />
                    </div>
                : undefined
            }
            

            <div className="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                <h1 className="card-title mt-xl-5 mb-4">{cardData.card.h1} <span className="text-primary">{cardData.card.name}</span></h1>
                <p className="fs-1">{cardData.card.details}</p>
                <div className="d-grid bottom-0">
                    <a className="btn btn-lg btn-primary mt-xl-6" href="#!">PROCEED TO ORDER<i className="fas fa-chevron-right ms-2"></i></a>
                </div>
            </div>
            {
                (cardData.indexKey % 2  == 1) ? 
                    <div className="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1">
                        <img className="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-end rounded-md-top-0" src={cardData.card.image} alt="..." />
                    </div>
                : undefined
            }
        </div>
    );
}