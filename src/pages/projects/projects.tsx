
import Map from "../map";

import projectlist from "./projectlist";
import { ProjectComponent } from "./projectcomponent";

//https://www.color-hex.com/color-palette/5200
export function Projects() {

  const body = (
    <div className="h-full">
      <div className="w-full h-full">
        
            <div className="mb-3 text-xl"> <span className="text-plink">{"{ my projects! }"}</span> its a lil empty rn 💔. hopefully one day this will be full of cool things!! </div>

            <div className="w-full h-auto grid grid-cols-2 gap-3">
              {projectlist.map((data) =>(<ProjectComponent data={data}/>))}
              
            </div>
      </div>
    </div>
  );
  return (
   <Map body={body}/>
  );
}
