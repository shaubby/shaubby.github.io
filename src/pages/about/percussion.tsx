import React, { use } from "react";
import { NavLink } from "react-router";

export default function Percussion() {
    return (
        <div className="bg-black p-5 text-white text-md mt-3">
            <div className="text-xl text-center"> <span className=""> my fav percussion music! </span></div>
            ill do 5 so this doesnt get too long lol    

            <div className="mt-1 w-full relative border-1 p-3 border-bwue rounded-xl">
                <iframe src="https://www.youtube.com/embed/e2QWx9VQ-Xw" className="float-right border-1 rounded-xl border-bwue m-2"></iframe>
                <div className="text-plurple mt-1">blue soul - michael burritt</div>

                <div className="text-base">
                    omg this piece is so beautiful. ive never seen music
                    display such a wide range of emotions like this before but this encompasses so many
                    incredible writing, especially at the end with the harmonica beautifully sailing over the percussion textures ♡♡♡.
                    eastman percussion ensemble is so good.
                </div>
            </div>

            <div className="mt-3 w-full relative border-1 p-3 border-plink rounded-xl">
                <iframe src="https://www.youtube.com/embed/OxOU-x3OqBc" className="float-right border-1 rounded-xl border-plink m-2"></iframe>
                <div className="text-plurple mt-1">the feeling of coming home - victoria labozzetta iii</div>

                <div className="text-base">
                    this piece is just so beautiful and filled with emotion and the eastman percussion ensemble plays it so effortlessly.
                    this kind of music demands a lot of communication between players and listening to it feels like youre taking a glimpse
                    at a friendship between players, not just a simple performance. i really want to play this one day.
                </div>
            </div>

            <div className="mt-3 w-full relative border-1 p-3 border-plurple rounded-xl">
                <iframe src="https://www.youtube.com/embed/71A_sm71_BI" className="float-right border-1 rounded-xl border-plurple m-2"></iframe>
                <div className="text-plurple mt-1">music for 18 musicians - steve reich</div>
                <div className="text-base">
                    not really neccessarily percussion only but has some percussion in it. however, this piece in constructed like a percussion ensemble
                    and has a lot of similarities to one. steve reich really found a way to make simple repetitive music feel alive and engaging
                    and this is my favorite piece of classical music ever, my favorite choice if i have a long plane/bus ride and want to unwind.
                    people dont think of this kind of music when they think classical music but i think people would enjoy this. <span className="text-plink">you should 100% listen to this,
                    but do it when you are doing something else like studying or in the car, and listen to the whole piece at once, not in multiple parts</span>
                </div>
            </div>

            <div className="mt-3 w-full relative border-1 p-3 border-gween rounded-xl">
                <iframe src="https://www.youtube.com/embed/sU3gS4bjn-Y" className="float-right border-1 rounded-xl border-gween m-2"></iframe>
                <div className="text-plurple mt-1">crown of thorns - david meslanka</div>
                <div className="text-base">
                    crown of thorns is a very special piece for me because it was my first "real" percussion ensemble piece i have ever played.
                    and what a way to start things off, this piece is pretty widely considered <span className="text-plink">THE BEST percussion ensemble ever written.</span>
                    this is a really beautiful piece of music and actually this piece was the first time i had ever gotten goosebumps from music.
                    ik david meslanka was best known for his orchestra stuff but his percussion ensemble is even better imo.
                </div>
            </div>
        </div>
    );
}

