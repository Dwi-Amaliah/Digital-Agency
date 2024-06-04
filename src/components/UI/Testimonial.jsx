import React from "react";
import "../../styles/testimonial.css";
import Slider from "react-slick";
import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";

const setting = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
};

const Testimonial = () => {
  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than{" "}
            <span className="highlight">5,000 customers</span>
          </h2>
        </div>

        <div className="slider_wrapper">
          <Slider {...setting}>
            <div className="slider__item">
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava01} alt="" />
                </div>

                <div>
                  <h5 className="customer__name">Jhon Doe</h5>
                  <p className="description">CEO, Workcreation</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava02} alt="" />
                </div>

                <div>
                  <h5 className="customer__name">Anney Martin</h5>
                  <p className="description">Software Developer</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava03} alt="" />
                </div>

                <div>
                  <h5 className="customer__name">William Cooper</h5>
                  <p className="description">Sr. Product Designer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
