function WorkShow({Data}){
    return (
        <div className="col-sm-6 col-md-3 mb-6">
            <div className="text-center">
            <img
                className="shadow-icon"
                src={Data.image}
                height={112}
                alt="..."
            />
            <h5 className="mt-4 fw-bold">{Data.name}</h5>
            <p className="mb-md-0">
            {Data.description}
            </p>
            </div>
        </div>
    )
}
export default WorkShow;