import React from 'react';

const Details = () => {
  return (
    <>
      <div className="split">
        <div className="area-1"></div>
        <div className="area-2 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h2>Why Me?</h2>
                  <p>
                    Skilled web designer and developer with expertise in HTML, CSS, Bootstrap, Laravel, React, WordPress, ES6, SQL, MySQL, and Oracle DB. I bring creativity to every project, ensuring visually stunning and user-friendly designs. Proficient in various programming languages and databases, my passion lies in delivering top-notch solutions that meet and exceed client expectations.
                  </p>
                  <div className="icons-container">
                    <img src="images/details-icon-html.png" alt="HTML icon" />
                    <img src="images/details-icon-css.png" alt="CSS icon" />
                    <img src="images/details-icon-bootstrap.png" alt="Bootstrap icon" />
                    <img src="images/laravel.svg" alt="Laravel icon" />
                    <img src="images/file-type-reactjs.svg" alt="React icon" />
                    <img src="images/python.svg" alt="Python icon" />
                    <br/>
            
                    <br/>
                    <img src="images/mysql-original-wordmark.svg" alt="MySQL icon" />
                    <img src="images/oracle.svg" alt="Oracle icon" />
                    <img src="images/wordpress.svg" alt="WordPress icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
