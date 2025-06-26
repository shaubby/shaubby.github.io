import {BoldWrapper} from "./boldwrapper";
interface Props  {
    data: {name: string, composer: string, youtube: string, notes: string},
}

export function Piece(props : Props) {

    return(
        <div className=" h-[60%] px-3 py-4 border-y-2 border-gween bg-[#1f2c38] ">
            <div className="flex h-full">
            
                <div className=" flex-4 overflow-auto">
                    <div className="text-xl text-gween w-full ">{props.data.name + " - " + props.data.composer}</div>
                    <hr className="border-gween border-1 mb-2"/>
                    <div className="text-base/5  mb-3 ">
                        <BoldWrapper text={props.data.notes} />
                    </div>
                </div>
                <iframe src={props.data.youtube} className="mx-4 w-[60%] flex-6 border-5 border-black"> </iframe>
            </div>
        </div>
    )
    
}