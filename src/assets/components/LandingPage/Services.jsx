const Services = () => {
  return (
    <div id="services" className="basic-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading">Web Development & Design Services</h2>
            <p className="p-heading">
              With over three years of experience, I offer a range of services in web development and design. My focus is to deliver high-quality solutions to startups and businesses.
            </p>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
        <div className="row">
          <div className="col-lg-4 custom-col">
            <div className="text-box" style={{height: '400px'}}>
              <i className="far fa-gem"></i>
              <h4>Web Design</h4>
              <p>Effective online projects start with captivating design. I create visually appealing designs that provide a strong foundation for development and ensure long-term growth.</p>
            </div>
            {/* end of text-box */}
          </div>
          {/* end of col */}
          <div className="col-lg-4 custom-col">
            <div className="text-box" style={{height: '400px'}}>
              <i className="fas fa-code"></i>
              <h4>Web Development</h4>
              <p>Whether coding from my own designs or utilizing customer-provided designs, I focus on generating clean, well-structured code for reliable and efficient web development.</p>
            </div>
            {/* end of text-box */}
          </div>
          {/* end of col */}
          <div className="col-lg-4 custom-col">
            <div className="text-box" style={{height: '400px'}}>
              <i className="fas fa-tv"></i>
              <h4>WordPress Development</h4>
              <p>I specialize in WordPress development, creating tailored solutions that align with your business needs. Leverage the power of WordPress for a robust online presence.</p>
            </div>
            {/* end of text-box */}
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
    /* end of basic-2 */
  );
};

export default Services;
