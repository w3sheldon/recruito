import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// if you really wanted to you can create these slides dynamically if the logos change a lot
function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            className="img-fluid mx-auto p-2"
            src="/images/logo-placeholder.png"
            alt="a placeholder slot for a brand logo"
          />
        </div>
        <div>
          <img
            className="img-fluid mx-auto p-2"
            src="/images/logo-placeholder.png"
            alt="a placeholder slot for a brand logo"
          />
        </div>
        <div>
          <img
            className="img-fluid mx-auto p-2"
            src="/images/logo-placeholder.png"
            alt="a placeholder slot for a brand logo"
          />
        </div>
        <div>
          <img
            className="img-fluid mx-auto p-2"
            src="/images/logo-placeholder.png"
            alt="a placeholder slot for a brand logo"
          />
        </div>
        <div>
          <img
            className="img-fluid mx-auto p-2"
            src="/images/logo-placeholder.png"
            alt="a placeholder slot for a brand logo"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
