import Image from 'next/image';
import { ArrowRight } from 'react-bootstrap-icons';


export default function Home() {
  return  (
    <div>
     
      <nav className="navbar nav-color">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image
              src="/assets/images/logos/logo.svg"
              alt="Arizona Bitcoin Network Logo"
              className="d-inline-block align-text-center"
              width={64}
              height={64}
              priority
            />
            <span className="fw-bold" style={{ color: '#ffffff' }}>AZ Bitcoin Network</span>
          </a>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold">Be a part of the future</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">We are the trusted hub in Arizona for all things bitcoin. Connect, learn, grow, and build to positively impact the world around you.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  {/* <a href="https://twitter.com/azbitcoiners" className="btn btn-outline-secondary btn-lg px-4"><i className="bi bi-twitter"></i></a>
                  <a href="https://discord.gg/cUAztbUbe4" className="btn btn-outline-secondary btn-lg px-4"><i className="bi bi-discord"></i></a>
                  <a href="https://t.me/+1l9twVHcAUo1MDE5" className="btn btn-outline-secondary btn-lg px-4"><i className="bi bi-telegram"></i></a>
                  <a href="https://www.linkedin.com/company/78464568/" className="btn btn-outline-secondary btn-lg px-4"><i className="bi bi-linkedin"></i></a>
                  <a href="https://meetup.com/azbitcoin" className="btn btn-outline-secondary btn-lg px-4"><i className="bi bi-calendar-event"></i></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* what we do section */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="/assets/images/bitcoin.png"
              alt="Bitcoin"
              className="d-block mx-lg-auto img-fluid"
              width={278}
              height={297}
              priority
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">What We Do</h1>
            <p className="lead">We create social events for the local and remote community as well as self-service options for people to increase their network, learn about bitcoin, and how to begin using it.</p>
          </div>
        </div>
      </div>

      {/* Why We Do It Section */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="/assets/images/lightning.png"
              alt="Lightning"
              className="d-block mx-lg-auto img-fluid"
              width={283}
              height={470}
              priority
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Why We Do It</h1>
            <p className="lead">Bitcoin represents a better world for all. It’s a system that works for the common man as well as the wealthy.</p>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="/assets/images/megaphone.png"
              alt="Lightning"
              className="d-block mx-lg-auto img-fluid"
              width={392}
              height={417}
              priority
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Events</h1>
            <p className="lead">Join us an event to learn more and get connected</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="https://meetup.com/azbitcoin/" className="btn btn-primary btn-lg px-4 me-md-2">View All Events</a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">Get Involved</h1>
            <p className="lead">Want to get involved with the awesome community work we’re doing? Reach out as a sponsor or volunteer.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a href="https://forms.gle/CUQ6QfF6pvhNoD3m7" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Reach Out</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">© 2023 AZ Bitcoin Network, Inc</span>
          </div>
          {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="https://twitter.com/azbitcoiners"><i className="bi bi-twitter"></i></a></li>
            <li className="ms-3"><a className="text-muted" href="https://discord.gg/cUAztbUbe4"><i className="bi bi-discord"></i></a></li>
            <li className="ms-3"><a className="text-muted" href="https://t.me/+1l9twVHcAUo1MDE5"><i className="bi bi-telegram"></i></a></li>
          </ul> */}
        </footer>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </div>
  );
}
