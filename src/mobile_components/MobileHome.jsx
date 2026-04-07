import React, { useState, useEffect, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import katsuLogo from '../../assets/logo.png'
import menuImage from '../../assets/icons/menu.svg'
import bigBentoImage from '../../assets/big_bento_cropped.jpg'
import tonkatsuImage from '../../assets/tonkatsu_curry.png'
import messageImage from '../../assets/icons/message.svg'
import fbImage from '../../assets/icons/fb.svg'
import instaImage from '../../assets/icons/insta_cream.svg'
import korJapHawImage from '../../assets/kor-jap-haw.png'
import flagsImage from '../../assets/flags.png'
import potatoSalad from '../../assets/potato_salad.png'
import chickenKatsuSandwich from '../../assets/menu_items/chicken_katsu_sandwich.jpg'
import katsuCurry from '../../assets/menu_items/katsu_curry.png'
import katsuBento from '../../assets/menu_items/katsu_bento.png'
import '../../katsu.css'

export default function MobileHome() {
  var menuShown = false;
  var menuAnimating = false;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // This is the function that toggles the state
    const toggleMenu = () => {
      setIsMenuOpen(prev => !prev);
    };
  
    // The hideMenu and showMenu logic will be handled by CSS and the state change.
    
    // Use a useEffect hook to prevent background scrolling when the menu is open.
    useEffect(() => {
      // If the menu is open, set overflow to hidden on the body
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
  
      // Cleanup function to ensure overflow is reset when the component unmounts
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isMenuOpen]);
return <Container>
      <div id="root" />
  <div className="root-mobile">
    <div
      id="scrim"

      className="scrim"
      style={{ display: "none" }}
    />





    <div
      id="nav-bar-menu"
      className="root-item"
      style={{
        position: "fixed",
        backgroundColor: "black",
        width: "100%",
        marginTop: "-50px"
      }}
    >
      <a href="./index.html" className="katsu-link">
        <div className="nav-menu-item">Home</div>
      </a>
      <div style={{ height: 1, width: "100%", backgroundColor: "grey" }} />
      <a href="./about.html" className="katsu-link">
        <div className="nav-menu-item">About</div>
      </a>
      <div style={{ height: 1, width: "100%", backgroundColor: "grey" }} />
        <a href="./contact.html" className="katsu-link">
          <div className="nav-menu-item">Contact Us</div>
        </a>
      </div>
    



    <div
      id="header-mobile"
      className="sticky root-item"
      style={{
        background: "#680000",
        width: "100%",
        height: 72,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div style={{ padding: 12, height: 48, width: 48 }}>
        <div
          onClick={toggleMenu()}
          style={{
            backgroundImage: `url(${menuImage})`,
            height: "100%",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      <div style={{ padding: 8, height: 56, width: 56 }}>
        <div
          style={{
            backgroundImage: `url(${katsuLogo})`,
            height: "100%",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      <div style={{ padding: "10px 12px 0px 0px", height: 56 }}>
        <a
          href="https://kingpin-katsu.square.site/s/order"
          className="katsu-link"
          target="_blank"
        >
          <div
            style={{
              color: "white",
              fontFamily: '"Mochiy Pop P One", sans-serif',
              textDecoration: "none",
              textAlign: "center",
              fontSize: 16
            }}
          >
            <span style={{ display: "block" }}>
              ORDER
              <span>
                <span style={{ display: "block" }}>
                  NOW<span></span>
                </span>
              </span>
            </span>
          </div>
        </a>
      </div>
    </div>






    
    <div id="intro-mobile" style={{ background: "black", paddingTop: 72 }}>
      <img
        src={bigBentoImage}
        style={{
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div style={{ padding: "0px 24px 24px 24px" }}>
        <div
          style={{
            paddingBottom: 8,
            textAlign: "center",
            color: "white",
            fontFamily: '"Mochiy Pop P One", sans-serif',
            fontSize: 24,
            textTransform: "uppercase"
          }}
        >
          The new katsu boss is in town!
        </div>
        <a
          href="https://kingpin-katsu.square.site/s/order"
          className="katsu-link"
          target="_blank"
        >
          <div className="action-button" style={{ marginTop: 8 }}>
            ORDER CATERING
          </div>
        </a>
      </div>
    </div>
    <div id="menu-promo-mobile" style={{}}>
      <div style={{ padding: "24px 22px 22px 22px" }}>
        <div className="front-page-title" style={{ paddingBottom: 8 }}>
          Fresh Katsu, served your way.
        </div>
        <div className="front-page-paragraph">
          At Kingpin Katsu, we take pride in serving up mouthwatering, crispy
          katsu made fresh to order.
        </div>
      </div>
      <div
        style={{
          margin: "0px 22px",
          borderRadius: 12,
          background: "black",
          textAlign: "center"
        }}
      >
        <img
          src={tonkatsuImage}
          style={{
            display: "block",
            borderRadius: 12,
            width: "80%",
            margin: "auto",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      <div style={{ padding: 22 }}>
        <div className="front-page-paragraph">
          Whether you prefer a classic style or a unique twist, we offer a
          variety of katsu options, from golden-brown pork to succulent chicken
          and beyond, each cooked to perfection. Customize your meal with an
          array of tasty accompaniments, from traditional rice and fresh salads
          to flavorful sauces and side dishes. Every bite is a burst of flavor,
          tailored just for you.
        </div>
        <a
          href="https://kingpin-katsu.square.site/s/order"
          className="katsu-link"
          target="_blank"
        >
          <div className="action-button" style={{ marginTop: 24 }}>
            VIEW MENU
          </div>
        </a>
      </div>
      <div style={{ paddingTop: 10 }}>
        <div style={{ padding: "10px 22px" }}>
          <div className="menu-item" style={{ padding: 8, display: "flex" }}>
            <div style={{ height: 120, width: 120, margin: "auto 0px" }}>
              <img
                src={katsuBento}
                style={{ height: 120, width: 120 }}
              />
            </div>
            <div
              style={{
                padding: 16,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <div className="menu-item-title">Katsu bento</div>
              <div className="menu-item-description">
                Crispy katsu paired with steamed white rice, finely-shredded
                cabbage, two sides dishes, and sauce.
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "10px 22px" }}>
          <div className="menu-item" style={{ padding: 8, display: "flex" }}>
            <div style={{ height: 120, width: 120, margin: "auto 0px" }}>
              <img
                src={katsuCurry}
                style={{ height: 120, width: 120 }}
              />
            </div>
            <div
              style={{
                padding: 16,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <div className="menu-item-title">Katsu curry</div>
              <div className="menu-item-description">
                Pair your choice of katsu with quintessential Japanese curry
                made with tender carrots, onions, and warm curry spices.
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "10px 22px" }}>
          <div className="menu-item" style={{ padding: 8, display: "flex" }}>
            <div style={{ height: 120, width: 120, margin: "auto 0px" }}>
              <img
                src={chickenKatsuSandwich}
                style={{ height: 120, width: 120, borderRadius: 120 }}
              />
            </div>
            <div
              style={{
                padding: 16,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <div className="menu-item-title">Katsu Sandwich</div>
              <div className="menu-item-description">
                Crispy, juicy katsu sandwiches with crisp veggies, sauce, and
                soft fluffy bread.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        margin: "22px 0px 0px 22px",
        paddingBottom: 48,
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column"
        }}
      >
        <div
          style={{ padding: "0px 0px 16px 0px" }}
          className="front-page-title"
        >
          We do catering!
        </div>
        <div
          style={{ padding: "0px 16px 0px 0px" }}
          className="front-page-paragraph"
        >
          We're officially open for catering! Order 2 days in advance and we'll
          deliver to your event's location free of charge! Check out our menu
          today or contact us for customized orders for special events.
        </div>
      </div>
      <img
        src={potatoSalad}
        height={180}
        width={180}
        style={{
          marginTop: 16,
          borderRadius: "16px 0px 0px 16px",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      />
    </div>
    <div
      style={{
        padding: "32px 22px 0px 22px",
        background: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div
        className="front-page-title"
        style={{ color: "black", paddingBottom: 36 }}
      >
        Inspired by Japan, born in the Bay Area
      </div>
      <div
        className="front-page-paragraph"
        style={{ color: "black", textShadow: "none" }}
      >
        We love everything katsu, except that it's hard to find it done right.
        We've broken down what makes Katsu great in Japan, Korea, and Hawaii and
        brought those techniques to you. From our crispy golden panko breading
        to our handcrafted side dishes, we aim to deliver an authentic Katsu
        experience with every bite.
      </div>
      <img
        src={flagsImage}
        height={100}
        style={{
          margin: "24px 0px",
          borderRadius: "16px 0px 0px 16px",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      />
    </div>
    <div
      style={{
        padding: "0px 22px 22px 32px",
        background: "white",
        display: "flex",
        alignItems: "left",
        flexDirection: "column"
      }}
    >
      <div
        className="front-page-paragraph"
        style={{ color: "black", textShadow: "none" }}
      >
        We serve the San Francisco Bay Area!
      </div>
      <div
        className="front-page-paragraph"
        style={{ color: "black", textShadow: "none" }}
      >
        Currently we are primarily catering large events. Our kitchen is located
        in Alameda, CA with service limited primarily to the East Bay. However,
        feel free to contact us with any special requests or questions!
      </div>
    </div>
    <div style={{ padding: 22, display: "flex", justifyContent: "center" }}>
      <img src={instaImage} height="24px" width="24px" />
      <a
        href="https://www.instagram.com/kingpin.katsu/"
        target="_blank"
        className="link-item-text"
      >
        <div
          style={{ display: "flex", flexDirection: "column", paddingLeft: 10 }}
        >
          <div className="insta-promo">Follow us on Instagram!</div>
          <div className="insta-promo">@kingpin.katsu</div>
        </div>
      </a>
    </div>
  </div>
  <div id="header" style={{ display: "none" }}>
    <div className="header-block" style={{ float: "left", paddingLeft: 40 }}>
      <div className="option-layout">
        <img
          src={katsuLogo}
          style={{ height: 40, width: 40, padding: 10 }}
        />
        <div
          style={{
            background: "white",
            margin: 10,
            height: 40,
            width: 1,
            borderRadius: 6
          }}
        >
          {" "}
        </div>
      </div>
    </div>
    <div className="header-block" style={{ float: "right", paddingRight: 40 }}>
      <div className="option-layout" style={{ gap: 20 }}>
        <div id="header-home" className="header-section">
          <div className="header-section-text">Home</div>
        </div>
        <div id="header-about" className="header-section">
          <div className="header-section-text">About</div>
        </div>
        <div id="header-contact-us" className="header-section">
          <div className="header-section-text">Contact Us</div>
        </div>
        <div className="header-section">
          <div className="action-button">ORDER NOW</div>
        </div>
      </div>
    </div>
  </div>
  <div
    style={{
      width: "100%",
      height: 300,
      display: "none",
      padding: 40,
      background: "#680000"
    }}
  >
    <div style={{ width: 200, background: "green" }}></div>
    <div style={{ width: 300, background: "yellow" }}></div>
    <div style={{ width: 300, background: "blue" }}></div>
  </div>
  <div
    id="first-section"
    style={{ display: "contents", height: 400, float: "right" }}
  >
    <div style={{ height: "100%", display: "none" }}>
      <div>Fresh Katsu, served your way.</div>
      <div>
        At Kingpin Katsu, we take pride in serving up mouthwatering, crispy
        katsu made fresh to order. Whether you prefer a classic style or a
        unique twist, we offer a variety of katsu options, from golden-brown
        pork to succulent chicken and beyond, each cooked to perfection.
        Customize your meal with an array of tasty accompaniments, from
        traditional rice and fresh salads to flavorful sauces and side dishes.
        Every bite is a burst of flavor, tailored just for you.
      </div>
    </div>
    <div style={{ background: "blue" }} />
  </div>
  <div
    id="second-section"
    style={{
      display: "none",
      background: "#680000",
      borderRadius: "0px 150px 0px 0px"
    }}
  >
    <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
      <div style={{ width: "65%", padding: "40px 40px 40px 0px" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "black",
            borderRadius: "0px 24px 24px 0px"
          }}
        >
          <div
            style={{
              backgroundImage: `url(${tonkatsuImage})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
              borderRadius: "0px 24px 24px 0px"
            }}
          ></div>
        </div>
      </div>
      <div style={{ width: "35%", padding: 40 }}>
        <div className="front-page-title">Fresh Katsu, served your way.</div>
        <div className="front-page-paragraph" style={{ padding: "20px 0px" }}>
          At Kingpin Katsu, we take pride in serving up mouthwatering, crispy
          katsu made fresh to order. Whether you prefer a classic style or a
          unique twist, we offer a variety of katsu options, from golden-brown
          pork to succulent chicken and beyond, each cooked to perfection.
          Customize your meal with an array of tasty accompaniments, from
          traditional rice and fresh salads to flavorful sauces and side dishes.
          Every bite is a burst of flavor, tailored just for you.
        </div>
        <div className="action-button">VIEW MENU</div>
      </div>
    </div>
  </div>
  <div
    id="third-section"
    style={{ display: "none", background: "#680000", minHeight: 500 }}
  >
    <div
      style={{
        height: "100%",
        minHeight: 500,
        display: "flex",
        flexDirection: "row"
      }}
    >
      <div
        style={{
          width: "35%",
          padding: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div className="front-page-title">WE CATER!</div>
        <div className="front-page-paragraph" style={{ padding: "20px 0px" }}>
          We're officially open for catering! Order 2 days in advance and we'll
          deliver to your event's location free of charge! Check out our menu
          today or contact us for customized orders for special events.
        </div>
        <div className="action-button">VIEW MENU</div>
      </div>
      <div style={{ width: "65%", padding: "40px 0px 40px 40px" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "black",
            borderRadius: "24px 0px 0px 24px"
          }}
        >
          <div
            style={{
              backgroundImage: `url(${tonkatsuImage})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
              borderRadius: "0px 24px 24px 0px"
            }}
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div id="fourth-section" style={{ display: "none", background: "#680000" }}>
    <div style={{ background: "#FFFFFF", borderRadius: "0px 150px 0px 0px" }}>
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "65%", padding: "40px 40px 40px 0px" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "0px 24px 24px 0px"
            }}
          >
            <div
              style={{
                backgroundImage: `url(${korJapHawImage})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "100%",
                borderRadius: "0px 24px 24px 0px"
              }}
            ></div>
          </div>
        </div>
        <div style={{ width: "35%", padding: 40 }}>
          <div className="light-front-page-title">
            Inspired by Japan, born in the Bay Area.
          </div>
          <div
            className="light-front-page-paragraph"
            style={{ paddingTop: 20 }}
          >
            We love everything katsu, except that it's hard to find it done
            right. We've broken down what makes Katsu great in Japan, Korea, and
            Hawaii and brought those techniques to you. From our crispy golden
            panko breading to our handcrafted side dishes, we aim to deliver an
            authentic Katsu experience with every bite.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/kingpin.katsu/?utm_source=ig_embed&utm_campaign=loading"
      data-instgrm-version={14}
      style={{
        display: "none",
        background: "#FFF",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: 1,
        maxWidth: 540,
        minWidth: 326,
        padding: 0,
        width: "calc(100% - 2px)"
      }}
    >
      <div style={{ padding: 16 }}>
        {" "}
        <a
          href="https://www.instagram.com/kingpin.katsu/?utm_source=ig_embed&utm_campaign=loading"
          style={{
            background: "#FFFFFF",
            lineHeight: 0,
            padding: "0 0",
            textAlign: "center",
            textDecoration: "none",
            width: "100%"
          }}
          target="_blank"
        >
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            {" "}
            <div
              style={{
                backgroundColor: "#F4F4F4",
                borderRadius: "50%",
                flexGrow: 0,
                height: 40,
                marginRight: 14,
                width: 40
              }}
            />{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                justifyContent: "center"
              }}
            >
              {" "}
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: 4,
                  flexGrow: 0,
                  height: 14,
                  marginBottom: 6,
                  width: 100
                }}
              />{" "}
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: 4,
                  flexGrow: 0,
                  height: 14,
                  width: 60
                }}
              />
            </div>
          </div>
          <div style={{ padding: "19% 0" }} />{" "}
          <div
            style={{
              display: "block",
              height: 50,
              margin: "0 auto 12px",
              width: 50
            }}
          >
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 60 60"
              version="1.1"
              xmlns="https://www.w3.org/2000/svg"
              xmlnsXlink="https://www.w3.org/1999/xlink"
            >
              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g
                  transform="translate(-511.000000, -20.000000)"
                  fill="#000000"
                >
                  <g>
                    <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div style={{ paddingTop: 8 }}>
            {" "}
            <div
              style={{
                color: "#3897f0",
                fontFamily: "Arial,sans-serif",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: 550,
                lineHeight: 18
              }}
            >
              View this profile on Instagram
            </div>
          </div>
          <div style={{ padding: "12.5% 0" }} />{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 14,
              alignItems: "center"
            }}
          >
            <div>
              {" "}
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  height: "12.5px",
                  width: "12.5px",
                  transform: "translateX(0px) translateY(7px)"
                }}
              />{" "}
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  height: "12.5px",
                  transform: "rotate(-45deg) translateX(3px) translateY(1px)",
                  width: "12.5px",
                  flexGrow: 0,
                  marginRight: 14,
                  marginLeft: 2
                }}
              />{" "}
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  height: "12.5px",
                  width: "12.5px",
                  transform: "translateX(9px) translateY(-18px)"
                }}
              />
            </div>
            <div style={{ marginLeft: 8 }}>
              {" "}
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  flexGrow: 0,
                  height: 20,
                  width: 20
                }}
              />{" "}
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "2px solid transparent",
                  borderLeft: "6px solid #f4f4f4",
                  borderBottom: "2px solid transparent",
                  transform: "translateX(16px) translateY(-4px) rotate(30deg)"
                }}
              />
            </div>
            <div style={{ marginLeft: "auto" }}>
              {" "}
              <div
                style={{
                  width: 0,
                  borderTop: "8px solid #F4F4F4",
                  borderRight: "8px solid transparent",
                  transform: "translateY(16px)"
                }}
              />{" "}
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  flexGrow: 0,
                  height: 12,
                  width: 16,
                  transform: "translateY(-4px)"
                }}
              />{" "}
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "8px solid #F4F4F4",
                  borderLeft: "8px solid transparent",
                  transform: "translateY(-4px) translateX(8px)"
                }}
              />
            </div>
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "center",
              marginBottom: 24
            }}
          >
            {" "}
            <div
              style={{
                backgroundColor: "#F4F4F4",
                borderRadius: 4,
                flexGrow: 0,
                height: 14,
                marginBottom: 6,
                width: 224
              }}
            />{" "}
            <div
              style={{
                backgroundColor: "#F4F4F4",
                borderRadius: 4,
                flexGrow: 0,
                height: 14,
                width: 144
              }}
            />
          </div>
        </a>
        <p
          style={{
            color: "#c9c8cd",
            fontFamily: "Arial,sans-serif",
            fontSize: 14,
            lineHeight: 17,
            marginBottom: 0,
            marginTop: 8,
            overflow: "hidden",
            padding: "8px 0 7px",
            textAlign: "center",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          <a
            href="https://www.instagram.com/kingpin.katsu/?utm_source=ig_embed&utm_campaign=loading"
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial,sans-serif",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: "normal",
              lineHeight: 17
            }}
            target="_blank"
          >
            Kingpin Katsu
          </a>{" "}
          (@
          <a
            href="https://www.instagram.com/kingpin.katsu/?utm_source=ig_embed&utm_campaign=loading"
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial,sans-serif",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: "normal",
              lineHeight: 17
            }}
            target="_blank"
          >
            kingpin.katsu
          </a>
          ) • Instagram photos and videos
        </p>
      </div>
    </blockquote>
  </div>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      padding: 20
    }}
  >
    <div
      onMouseDown="hi()"
      onMouseUp="hello()"
      style={{ padding: "12px 12px 12px 0px" }}
    >
      <img src={katsuLogo} height="64px" width="64px" />
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        wordBreak: "break-word"
      }}
    >
      <div className="bottom-info-title">Kingpin Katsu</div>
      <div className="bottom-info-description">
        Fresh Katsu, made the way you choose.
      </div>
      <div style={{ display: "flex", flexDirection: "column", paddingTop: 8 }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            className="link-item-icon"
            src={instaImage}
            height="16px"
            width="16px"
          />
          <a
            href="https://www.instagram.com/kingpin.katsu/"
            target="_blank"
            className="link-item-text"
          >
            @kingpin.katsu
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            className="link-item-icon"
            src={fbImage}
            height="16px"
            width="16px"
          />
          <a
            href="https://www.facebook.com/Kingpin.Katsu/"
            target="_blank"
            className="link-item-text"
          >
            Kingpin.Katsu
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            className="link-item-icon"
            src={messageImage}
            height="16px"
            width="16px"
          />
          <a
            href="mailto:kingpinkatsu@gmail.com"
            target="_blank"
            className="link-item-text"
          >
            kingpinkatsu@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="root-mobile">
    <div style={{ padding: "11px 22px" }}>
      <a
        href="https://kingpin-katsu.square.site/s/order"
        className="katsu-link"
        target="_blank"
      >
        <div className="action-button">ORDER NOW</div>
      </a>
    </div>
    <div style={{ padding: "11px 22px 40px 22px" }}>
      <a
        href="mailto:kingpinkatsu@gmail.com"
        className="katsu-link"
        target="_blank"
      >
        <div className="action-button">CONTACT US</div>
      </a>
    </div>
  </div>
  </Container>
  }
