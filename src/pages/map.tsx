import { NavLink } from "react-router";
import React from "react";

interface Props {
    body: React.ReactNode
}

export default function Map(props: Props) {
    const [image, setImage] = React.useState("./nav/home.svg");
    const [image2, setImage2] = React.useState("./nav/about.svg");
    const [image3, setImage3] = React.useState("./nav/music.svg");
    const [image4, setImage4] = React.useState("./nav/projects.svg");
    
    return (
        <main  className="font-norm h-screen w-screen overflow-hidden " >
           
            <div className="w-full flex content-center justify-center relative font-norm">
            <img src="./main.svg" className="w-4/5 pixel-perfect"/>
            <a href="mailto:agar5333@gmail.com"><div className="absolute w-[3.5%] h-[6%]  left-[14%] top-[16%]"></div></a>
            <a href="https://github.com/shaubby" target="_blank"><div className="absolute w-[3%] h-[6%]  left-[18%] top-[16%]"></div></a>
            <a href="https://www.instagram.com/rishabh.agrwal_/" target="_blank"><div className="absolute w-[3%] h-[6%]  left-[21.5%] top-[16%]"></div></a>
            <div className="absolute top-[31%] left-[14.75%] w-[9.25%] h-[58%] p-2 pt-5">
            
                <NavLink to="/" end>
                    <img onMouseLeave={()=> {if(image != "./nav/home.svg") setImage("./nav/home.svg")}} onMouseEnter={()=> {if(image != "./nav/home2.svg") setImage("./nav/home2.svg")}} src={image} className="w-full"/>
                </NavLink>
                <NavLink to="/about" end>
                    <img onMouseLeave={()=> {if(image2 != "./nav/about.svg") setImage2("./nav/about.svg")}} onMouseEnter={()=> {if(image2 != "./nav/about2.svg") setImage2("./nav/about2.svg")}} src={image2} className="w-full mt-5"/>
                </NavLink>
                <NavLink to="/music" end>
                    <img onMouseLeave={()=> {if(image3 != "./nav/music.svg") setImage3("./nav/music.svg")}} onMouseEnter={()=> {if(image3 != "./nav/music2.svg") setImage3("./nav/music2.svg")}} src={image3} className="w-full mt-5"/>
                </NavLink>
                <NavLink to="/projects" end>
                    <img onMouseLeave={()=> {if(image4 != "./nav/projects.svg") setImage4("./nav/projects.svg")}} onMouseEnter={()=> {if(image4 != "./nav/projects2.svg") setImage4("./nav/projects2.svg")}} src={image4} className="w-full mt-5"/>
                </NavLink>
            </div>
            <div  className="left-[30.5%] text-xl top-[22.5%] w-[52.25%] p-8 h-[72%] text-white absolute overflow-y-auto">
                {props.body}
            </div>
            </div>
        </main>
      );
}