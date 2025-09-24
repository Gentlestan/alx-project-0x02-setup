import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {
    return(
        <div className="border rounded-lg p-4 bg-white">
            <h1 className="text-xl font-semibold">{title}</h1>
        </div>
    )
}

export default Card