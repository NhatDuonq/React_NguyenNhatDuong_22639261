function MainContent() {
    return (
      <div className="container mt-4" style={{ minWidth: '1200px' }}>
        <div className="row">
          <div className="col-lg-3 col-md-4 bg-light p-3">
            <div className="col">
              <img
               // src="/img/leftside.png"
                alt="Sidebar Image"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
  
          <div className="col-lg-9 col-md-8 p-3 d-flex flex-column align-items-center justify-content-center text-center">
            <h2 className="fw-bold">Sorry, no results were found for “cakescascsa”</h2>
            <img
             // src="/img/Screenshot 2025-02-26 160610.png"
              alt="No results"
              className="img-fluid my-3"
              style={{ maxWidth: '250px' }}
            />
            <p>We have all your Independence Day sweets covered.</p>
  
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <span className="badge rounded-pill text-bg-light px-3 py-2">Sweet Cake</span>
              <span className="badge rounded-pill text-bg-light px-3 py-2">Black Cake</span>
              <span className="badge rounded-pill text-bg-light px-3 py-2">Pozole Verde</span>
              <span className="badge rounded-pill text-bg-light px-3 py-2">Healthy food</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MainContent;