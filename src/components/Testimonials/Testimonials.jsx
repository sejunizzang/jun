import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "익명의 후기1",
    text: "꾸미고싶은 날 반지하나는 필수라고 생가합니다!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "익명의 후기2",
    text: "귀뚫고 찾아본 귀걸이 너무 이쁜것들이 많네요 강력추천 합니다",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "익명의 후기3",
    text: "힙하게 입는 스타일인데 목걸이 개성넘치는 것들이 많아 자주 방문하고 구매합니다. 강력추천!!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "익명의 후기4",
    text: "가장 저렴하고 가장 종류많은 홈페이지 이런 곳 저만 알고 싶어요ㅠㅠ",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
