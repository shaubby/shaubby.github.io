import Map from '../map';
import { NavLink } from 'react-router-dom';
import './home.css';
export function Home() {
    const body = (
        <div>
            <div className="columns-2  gap-10">
                <div className="">
                    <p className="">
                        <div className="mb-3 text-plink">★ hi traveller! ★<br /></div>
                        <div className="mb-3 text-gween">welcome to my home among the stars!<br /></div>
                        <div className="text-white">feel free to refuel and explore before heading back out into the vast world of the internet.<br /></div>
                        <br />
                    </p>
                </div>
                <div className=" grid place-items-center">
                    <img src="./home/icon.png" className="self-center w-2/3" />
                    <img src="./home/bar.svg" className="w-2/3" />
                </div>
            </div>
            <div className="relative bg-[url(/home/textbar.svg)] bg-contain bg-no-repeat h-12  px-[2%] content-center mt-3">
                <div className="w-full overflow-hidden whitespace-nowrap text-white p-2 h-[100%]">
                    <div className="marquee justify-center mb-1 text-white">
                        <span className='mx-20'> yay i have a visitor!! i hope you enjoy my super cool space station! </span>
                        <span className='mx-20'> yay i have a visitor!! i hope you enjoy my super cool space station! </span>
                    </div>
                </div>
            </div>
            <div className="text-lg mt-2 gap-5 flex">
                <div className="flex-1  text-center">
                    <p className="text-3xl">who am i?</p>
                    im rishabh, and i like to <NavLink to="/projects" end><a className="ml-1">code things</a></NavLink> and <NavLink to="/about" end><a className="ml-1">play music</a></NavLink>!
                    i have a whole page just so you can learn <NavLink to="/about" end><a className="ml-1">  about me!</a></NavLink>
                    <br />
                    i designed this page to be seen on a laptop! currently it wont work on mobile devices (im too lazy).
                </div>
                <div className="flex-1 bg-black text-base text-center p-3 text-plink">
                    <span className="text-2xl text-bwue">status:</span>
                    <br />
                    im currently working on college apps (not very fun), along with
                    learning how do digital art! (much more fun).
                    im also starting to build more projects and hope to get more involved with <a href="https://https://hackclub.com/" target="_blank">hackclub</a>! (wish i did this sooner)
                    im also practicing for <a href="https://www.okmmc.org/gpimc" target="_blank">gpimc!!  </a>(so excited)

                    <a className="no-underline" href="mailto:agar5333@gmail.com?subject=you should probably update your status&body=and also make this update status button better lol"><div className="border-2 border-plink p-1 m-3"><div className="no-underline bg-plink text-black p-2 text-lg/5"> remind me to update my status!<br /> is ok you can click me ♡</div></div></a>
                </div>
            </div>
        </div>
    );
    return (
        <Map body={body} />
    );
}