import JuiceLinker from "./juicelinker";
interface Props {
    data: { name: string, link: string, description: string, image: string, desclink: string },
}

export function ProjectComponent(props: Props) {

    return (
        <div className="w-full h-auto border-2 border-black relative overflow-hidden group rounded-xl">
            <a href={props.data.link} target="_blank">
            <img src={props.data.image} className="w-full text-white" />

            <div className="absolute bottom-0 w-full bg-black/90 p-2 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span>
                    <span className="text-plink text-2xl">{props.data.name}</span>
                    <div className="text-base text-white"> <JuiceLinker link={props.data.desclink} text={props.data.description}/></div>
                </span>
            </div>
            </a>
        </div>
    )

}