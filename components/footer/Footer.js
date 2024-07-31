export default function Footer(){
    return (
        <section className="py-0 pt-7 bg-1000">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
              <h5 className="lh-lg fw-bold text-white">COMPANY</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">About Us</a></li>
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Team</a></li>
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Careers</a></li>
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">blog</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 col-lg-3 mb-3">
              <h5 className="lh-lg fw-bold text-white">CONTACT</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Help &amp; Support</a></li>
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Partner with us </a></li>
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Ride with us</a></li>
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Ride with us</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
              <h5 className="lh-lg fw-bold text-white">LEGAL</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Terms &amp; Conditions</a></li>
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Refund &amp; Cancellation</a></li>
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Privacy Policy</a></li>
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
              <h5 className="lh-lg fw-bold text-white">LEGAL</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Terms &amp; Conditions</a></li>
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Refund &amp; Cancellation</a></li>
                <li className="lh-lg"><a className="text-200 text-decoration-none" href="#!">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-8 col-lg-6 col-xxl-4">
              <h5 className="lh-lg fw-bold text-500">FOLLOW US</h5>
              <h3 className="text-500 my-4">Receive exclusive offers and <br />discounts in your mailbox</h3>
              <div className="row input-group-icon mb-5">
                <div className="col-auto"><i className="fas fa-envelope input-box-icon text-500 ms-3"></i>
                  <input className="form-control input-box bg-800 border-0" type="email" placeholder="Enter Email" aria-label="email" />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-800" />
          <div className="row flex-center pb-3">
            <div className="col-md-6 order-0">
              <p className="text-200 text-center text-md-start">All rights Reserved &copy; Your Company, 2021</p>
            </div>
            <div className="col-md-6 order-1">
              <p className="text-200 text-center text-md-end"> Made with&nbsp;
                <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#FFB30E" viewBox="0 0 16 16">
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                </svg>&nbsp;by&nbsp;<a className="text-200 fw-bold" href="https://themewagon.com/" target="_blank">ThemeWagon </a>
              </p>
            </div>
          </div>
        </div>

      </section>
    )
}