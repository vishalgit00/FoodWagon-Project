import WorkShow from "./WorkShow";
import {WorkImages} from "./WorkData.js"

export default function Work(){
    return (
        <section className="py-0 bg-primary-gradient">
            <div className="container">
                <div className="row justify-content-center g-0">
                    <div className="col-xl-9">
                        <div className="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
                        <h5 className="fw-bold text-danger fs-3 fs-lg-5 lh-sm my-6">
                            How does it work
                        </h5>
                        </div>
                        <div className="row">
                        {
                            WorkImages.map((v,i,a)=>{
                                return <WorkShow key={i} Data = {v} />

                            }) 
                        }
                        </div>
                    </div>
                </div>
            </div>
        {/* end of .container*/}
        </section>

    )
}