import React, { useEffect, useRef } from "react";
import "./Carousel.css";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import Header from "./Header.jsx";

const Carousel = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const listHTML = listRef.current;
    const nextButton = carousel.querySelector("#next");
    const prevButton = carousel.querySelector("#prev");
    const backButton = carousel.querySelector("#back");
    const seeMoreButtons = carousel.querySelectorAll(".seeMore");

    let unAcceppClick;

    const showSlider = (type) => {
      nextButton.style.pointerEvents = "none";
      prevButton.style.pointerEvents = "none";

      carousel.classList.remove("next", "prev");
      const items = carousel.querySelectorAll(".list .item");

      if (type === "next") {
        listHTML.appendChild(items[0]);
        carousel.classList.add("next");
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add("prev");
      }

      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = "auto";
        prevButton.style.pointerEvents = "auto";
      }, 2000);
    };

    nextButton.onclick = () => showSlider("next");
    prevButton.onclick = () => showSlider("prev");

    seeMoreButtons.forEach((button) => {
      button.onclick = () => {
        carousel.classList.remove("next", "prev");
        carousel.classList.add("showDetail");
      };
    });

    backButton.onclick = () => {
      carousel.classList.remove("showDetail");
    };
  }, []);

  return (
    <>
      <Header />
      <div ref={carouselRef} className="carousel">
        <div className="list" ref={listRef}>
          <div className="item">
            <img src={img1} alt="img1" />
            <div className="introduce">
              <div className="title">Rice 1</div>
              <div className="topic">Brand 1</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">Brand 1</div>
              <div className="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Copy all other .item divs exactly like above for img2 to img6 */}
          <div className="item">
            <img src={img2} alt="img2" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={img3} alt="img3" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={img4} alt="img4" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Repeat for img3, img4, img5, img6 exactly like original */}
        </div>

        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
          <button id="back">See All &#8599;</button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
