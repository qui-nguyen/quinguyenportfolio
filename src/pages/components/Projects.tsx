import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import { useMediaQuery } from "react-responsive";
import CardProject from "./CardProject";

import projectsData from "../data/projectsData.json";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

// const projectsData: { name: string; img: string; desc: string; link: string, nameLink: string, logo: string }[] = [
//     {
//         name: "everybuddy",
//         img: "/ticketac.png",
//         desc: "Application mobile qui permet de vous géolocaliser, de suivre l’historique de vos déplacements et de chatter avec l’ensemble des utilisateurs connectés à l’application.",
//         link: "https://github.com/qui-nguyen",
//         nameLink: "Github",
//         logo: '/logo-loca.png'
//     },
//     {
//         name: "test1",
//         img: "/bikeshop.png",
//         desc: "Application mobile qui permet de vous géolocaliser, de suivre l’historique de vos déplacements et de chatter avec l’ensemble des utilisateurs connectés à l’application.",
//         link: "",
//         nameLink: "Github",
//         logo: '/logo-loca.png'
//     },
//     {
//         name: "test2",
//         img: "/weatherapp.png",
//         desc: "Application mobile qui permet de vous géolocaliser, de suivre l’historique de vos déplacements et de chatter avec l’ensemble des utilisateurs connectés à l’application.",
//         link: "",
//         nameLink: "Github",
//         logo: '/logo-loca.png'
//     },
//     {
//         name: "test3",
//         img: "/morningnews.png",
//         desc: "Application mobile qui permet de vous géolocaliser, de suivre l’historique de vos déplacements et de chatter avec l’ensemble des utilisateurs connectés à l’application.",
//         link: "",
//         nameLink: "Github",
//         logo: '/logo-loca.png'
//     },
//     {
//         name: "test4",
//         img: "/mymoviz.png",
//         desc: "Application mobile qui permet de vous géolocaliser, de suivre l’historique de vos déplacements et de chatter avec l’ensemble des utilisateurs connectés à l’application.",
//         link: "", nameLink: "Github",
//         logo: '/logo-loca.png'
//     },
// ];


const Projects = () => {

      const isDesktop = useMediaQuery({
        query: "(min-width: 1600px)"
      });

      const isHorizontal = useMediaQuery({
        query: "(min-width: 1028px)"
      });
    
      const isTablet = useMediaQuery({
        query: "(min-width: 768px)"
      });
    
      const isMobile = useMediaQuery({
        query: "(min-width: 640px)"
      });
    
      const isPortrait = useMediaQuery({
        query: "(orientation: portrait)"
      });
    
      const isRetina = useMediaQuery({
        query: "(min-resolution: 300dpi)"
      });
    
    return (
        <>
            <div id="projects" className="projects">
                <div className="projects__title"><h1>Mes projets</h1></div>
                <div className="projects__swipper">
                    <Swiper
                        slidesPerView={isDesktop || isHorizontal ? 3 : (isTablet ? 2 : 1)}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {projectsData.map((project) => {
                            return (
                                <SwiperSlide>
                                    <CardProject
                                        key={project.name}
                                        name={project.name}
                                        img={project.img}
                                        desc={project.desc}
                                        link={project.link}
                                        nameLink={project.nameLink}
                                        logo={project.logo}
                                        techno={project.techno}
                                    ></CardProject>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="projects__btn"><a href="https://github.com/qui-nguyen" target="_blank"><div>En savoir plus</div></a>  </div>
            </div>
        </>
    )
}

export default Projects;