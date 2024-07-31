import React from "react";
import { FaLink } from "react-icons/fa6";
import { FaSass } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandThreejs } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import "./styles.scss";

function Projects() {
  const projectConfig = [
    {
      title: "ShoExpress",
      desc: "Designed an elegant demo website for shoe shopping, featuring animations to showcase various options",
      technologies: [
        {
          SvgIcon: SiReact,
          text: "React",
        },
        {
          SvgIcon: FaSass,
          text: "Scss",
        },
        {
            SvgIcon: SiNetlify,
            text: "Netlify",
        }
      ],
      buttonTxt: "Go to ShoExpress",
      background: {
        card: "rgb(24, 36, 100, 0.7)",
        button: "rgb(48,60,116)",
        image: "rgb(4,92,235)",
      },
      imgLink: './project2.png',
      url: "https://shoexpress.netlify.app/",
    },
    {
      title: "3D Art Gallery",
      desc: "Interactive 3D Art Gallery to display art works to display artwork with on-click zoom-in, auto-rotate, and reset functionality.",
      technologies: [
        {
          SvgIcon: SiReact,
          text: "React",
        },
        {
          SvgIcon: TbBrandThreejs,
          text: "ThreeJs",
        },
        {
          SvgIcon: IoLogoCss3,
          text: "Css",
        },
        {
            SvgIcon: SiNetlify,
            text: "Netlify",
        }
      ],
      buttonTxt: "Go to 3D Art Gallery",
      background: {
        card: "rgb(132, 4, 52, 0.7)",
        button: "rgb(144, 28, 68)",
        image: "rgb(231, 156, 180)",
      },
      url: "https://priyasonar-3d-art-gallery.netlify.app/",
      imgLink: './project1.jpg',
    },
  ];
  return (
    <section className="projects">
      <h2 className="header" id="projects">
        Personal Projects
      </h2>
      <div className="wrapper">
        {projectConfig.map((item) => (
          <div className="card" style={{ background: item.background.card }}>
            {/* <div
              className="image-card"
              style={{ background: item.background.image }}
            >
              <img className="image" src={item.imgLink} alt="" />
            </div> */}
            <div className="details-wrapper">
              <div className="details">
                <div className="title">{item.title}</div>
                <div className="desc">{item.desc}</div>
                <div className="tech-wrapper">
                  <div className="tech-title">Technologies I have used:</div>
                  <div className="capsule-wrapper">
                    {item.technologies.map(({ SvgIcon, text }) => (
                      <div className="capsule">
                        <SvgIcon size={22} />
                        <span className="text">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="button"
                style={{ background: item.background.button }}
                onClick={() => window.open(item.url, "_blank")}
              >
                <FaLink size={25} /> <span>{item.buttonTxt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;

