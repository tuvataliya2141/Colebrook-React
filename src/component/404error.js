import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Error() {
  return (
    <div>
      <Header/>

      <main className="main page-404">
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
                <p className="mb-20"><img src="assets/imgs/page/page-404.png" alt="/" className="hover-up" /></p>
                <h1 className="display-2 mb-30">Page Not Found</h1>
                <p className="font-lg text-grey-700 mb-30">
                  The link you clicked may be broken or the page may have been removed.<br />
                  visit the <a> <span> Homepage</span></a> or <a ><span>Contact us</span></a> about the problem
                </p>
                <div className="search-form">
                  <form action="#">
                    <input type="text" placeholder="Search…" />
                    <button type="submit"><i className="fi-rs-search" /></button>
                  </form>
                </div>
                <Link className="btn btn-default submit-auto-width font-xs hover-up mt-30" to="/"><i className="fi-rs-home mr-5" /> Back To Home Page</Link>
              </div>
            </div>
          </div>
        </div>
      </main>


      <footer className="main">
        <section className="newsletter mb-15">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="position-relative newsletter-inner">
                    <div className="newsletter-content">
                    <h2 className="mb-20">
                        Stay home &amp; get your daily <br />
                        needs from our shop
                    </h2>
                    <p className="mb-45">Start You'r Daily Shopping with <span className="text-brand"> Colebrook Mart</span></p>
                    <form className="form-subcriber d-flex">
                        <input type="email" placeholder="Your emaill address" />
                        <button className="btn" type="submit">Subscribe</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </footer>


        <Footer/>
    </div>
  )
}

export default Error;
