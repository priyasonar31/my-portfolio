import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import headerImg from "../../assets/header.svg";
import "./style.scss";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Software Developer"
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const onClickButton = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.querySelector("#projects").offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <section id="home" className="home-wrapper">
      <div className="home-content">
        <div className="home-content-greeting">Hello,</div>
        <h2 className="home-content-name">I'm Priya</h2>
        <div className="home-content-auto">{text}</div>
        <p>
          A developer turning coffee into code and ideas into
          reality.
        </p>
        <p>
          {" "}
          I create web apps and efficient back-end systems, making the web a
          more user friendly place, one pixel at a time.
        </p>
        <div className="home-content-3d-wrapper">
        <button className="home-content-3d-wrapper-button" onClick={onClickButton}>View My Work<FaArrowCircleRight size={18} /></button>
        </div>
      </div>
      <div className="home-dev-img">
        <img src={headerImg} alt="developer" />
      </div>
    </section>
  );
};

export default Home;
