import Map from "../map";
import music from "./pieces";
import {Piece} from "./piece";

//https://www.color-hex.com/color-palette/5200
export function Music() {


  const body = (
    <div className="h-full w-full text-xl">
      <div className="text-2xl mb-2">omg you want listen to me play music! yay im so happy :)</div>
      <hr className="border-1 border-gween"></hr>
      {music.map((data) => (
        <Piece data={data}/>
      ))} 
      <hr className="border-1 border-gween"></hr>
      <br/>

    </div>
  );
  return (
    <Map body={body} />
  );
}
