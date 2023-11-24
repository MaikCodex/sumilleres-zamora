import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Mousewheel, fade } from "swiper";
import { React, useRef, useState } from "react";

const Slider = () => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);


  return (
    <div>
      <h1 class="l-heading">
        Testimonials <span>Swiper JS</span>
      </h1>

      <div class="c-testimonials">
          <ul class="c-testimonials__items swiper-wrapper">

        <Swiper
          mousewheel={true}
          loop={true}
          modules={[Pagination, Autoplay, Mousewheel]}
          effect={fade}
          spaceBetween= {30}
          navigation={{
            nextEl: '.c-testimonials__arrow-next',
            prevEl: '.c-testimonials__arrow-prev',
          }}
          pagination={{
            el: '.c-testimonials__pagination',
            clickable: true
          }}
          // onSwiper={(swiper) => {
          //   setSwiper(swiper);
          // }}
        >
            <SwiperSlide key={"feature"}>
            <li class="c-testimonials__item c-card-testimonial swiper-slide">
              <div class="c-card-testimonial__profile">
                <img
                  src="https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/vicente.jpeg"
                  alt=""
                  class="c-card-testimonial__image"
                />
              </div>

              <div class="c-card-testimonial__description">
                <span class="c-card-testimonial__job">Guitars @Golgotha</span>

                <div class="c-card-testimonial__author">Vicente Paya</div>

                <div class="c-card-testimonial__excerpt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  aliquid ut, explicabo sit fugiat recusandae dolore omnis minus
                  sequi incidunt aut doloribus minima soluta velit, nobis, est
                  eos iste at!
                </div>

                <a
                  href="https://www.linkedin.com/in/hugo-salazar/"
                  class="c-card-testimonial__link"
                  target="_blank"
                >
                  More on Linkedin
                </a>
              </div>
            </li>
            </SwiperSlide>


            <SwiperSlide key={"feature"}>
            <li class="c-testimonials__item c-card-testimonial swiper-slide">
              <div class="c-card-testimonial__profile">
                <img
                  src="https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/pincho.jpeg"
                  alt=""
                  class="c-card-testimonial__image"
                />
              </div>

              <div class="c-card-testimonial__description">
                <span class="c-card-testimonial__job">
                  Vocals @Amon The Sign
                </span>

                <div class="c-card-testimonial__author">Amón Lopez</div>

                <div class="c-card-testimonial__excerpt">
                  Asperiores tempora id corporis ab reiciendis enim odio
                  expedita dolorum recusandae! Perspiciatis ullam commodi
                  expedita veritatis, architecto molestiae tempora magni
                  voluptas voluptatem. Facilis consequuntur vitae magnam magni?
                  Corrupti, aperiam excepturi!
                </div>

                <a
                  href="https://www.linkedin.com/in/hugo-salazar/"
                  class="c-card-testimonial__link"
                  target="_blank"
                >
                  More on Linkedin
                </a>
              </div>
            </li>
            </SwiperSlide>

        </Swiper>
          </ul>

        <div class="c-testimonials__pagination"></div>

        <div class="c-testimonials__arrows">
          <button class="c-testimonials__arrow-prev">Prev</button>
          <button class="c-testimonials__arrow-next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;

{
  /* <script>
    var swiper = new Swiper('.c-testimonials', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.c-testimonials__pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.c-testimonials__arrow-next',
      prevEl: '.c-testimonials__arrow-prev',
    }
  });
  </script> */
}
