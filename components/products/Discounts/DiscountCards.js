import { contextCard } from "../../Context/ContextData";
import { useContext } from "react";
function DiscountCards ({}){
    const {Items} = useContext(contextCard);
    return (
        <>
        {
            Items.map((Items,i,a)=>{
                return(<div className="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
                    <div className="card card-span h-100">
                    <div className="position-relative">
                        {" "}
                        <img
                            className="img-fluid rounded-3 w-100"
                            src={Items.image}
                            alt="..."
                        />
                        <div className="card-actions">
                        <div className="badge badge-foodwagon bg-primary p-4">
                        <div className="d-flex flex-between-center">
                            <div className="text-white fs-7">{Items.offer}</div>
                            <div className="d-block text-white fs-2">
                            {Items.offerDiscount} <br />
                            <div className="fw-normal fs-1 mt-2">{Items.subTitle}</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card-body px-0">
                <h5 className="fw-bold text-1000 text-truncate">{Items.name}</h5>
                <span className="badge bg-soft-danger py-2 px-3">
                    <span className="fs-1 text-danger">{Items.remainingDays}</span>
                </span>
                </div>
                <a className="stretched-link" href="#" />
            </div>
        </div>
        )
        })
        }
        </>

    )
}
export default DiscountCards;