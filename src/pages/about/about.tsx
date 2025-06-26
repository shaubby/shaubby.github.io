import Percussion from "./percussion";
import Games from "./games";
import Map from "../map";
export function About() {
    const body = (
        <div className="h-full w-full">
            <div>
                <div className="flex gap-10 h-full w-full">
                    <div className="flex-1 text-lg/6 h-full w-full">
                        <div className=" text-center">
                            <div className=" text-3xl ">about me<br /></div>
                            |----------------------------------------|
                            <div className="mb-3">my name is <span className="accent">rishabh</span> and i am a 17 year old from <span className="accent">dallas, texas</span>, but i think its cooler to imagine that i made my home among the <span className="accent">★  stars  ★ </span> (thats why i made this website!)<br />  </div>
                            <div className="mb-3">i like to spend my time <span className="accent">coding</span> things like <a href="https://shaubbyplayz.itch.io/">games</a> and websites even though im not that good at it. <br /></div>
                            <div className="mb-3">i also spend my time playing <span className="accent">video games</span> and drawing  <span className="accent">bad art</span>. </div>

                            <div className="text-[#b4e685] mb-3">
                                BUT more than anything else, i am a classically trained percussionist!
                                you might even see me at pasic this year! (2025)
                            </div>
                            <div className="bg-black text-[#ff9494] p-2 "> feel free to contact me! (top left) even if its just to tell me you like my website/music i would love to hear from you!</div>
                            <div className="h-full flex justify-center items-center w-full mt-10">

                                <p>yay empty space :3</p>
                            </div>
                            <br />
                        </div>

                    </div>
                    <div className="flex-1">
                        <div className="border-3 border-plink text-center text-base mb-2 rounded-lg"> scroll down and see my favorite percussion music! i promise its rlly cool 🙏</div>
                        <Games />
                    </div>
                </div>
                <Percussion />
            </div>
        </div>
    );
    return (
        <Map body={body}/>
    )
}