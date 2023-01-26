import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I highly recommend khalid for any project or opportunity. They have consistently demonstrated their ability to think creatively and strategically, resulting in successful outcomes.",
    },
    {
      img: profilePic2,
      review:
        "I had the pleasure of working with khalid on several web development projects and I can confidently say that they are an exceptional developer. Their technical skills in HTML, CSS, JavaScript and various web frameworks are top-notch and they always deliver high-quality code on time.",
    },
    {
      img: profilePic3,
      review:
        "I highly recommend khalid for any web development project and I am confident they will continue to excel in their future endeavors. They have a great eye for design and user experience which makes them a valuable asset to any web development team. In addition, their ability to collaborate and communicate effectively with team members and clients is impressive.",
    },
    {
      img: profilePic4,
      review:
        "I have had the pleasure of working with khalid on multiple web development projects and I can confidently say that they are a highly skilled and dedicated professional. is also a great team player, with excellent communication and problem-solving skills. I have no hesitation in recommending khalid for any web development project and I am confident they will continue to excel in their future endeavors.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
