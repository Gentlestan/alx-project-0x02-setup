import { type ButtonProps } from "@/interfaces";

const sizeClasses: Record<ButtonProps['size'], string> = {
   small: 'px-3 py-1 text-sm',
   medium: 'px-4 py-2 text-base',
   large: 'px-6 py-3 text-lg',
}

const Button: React.FC<ButtonProps> = ({children, shape, size}) => {
    return (
        <div>
            <button className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape}`}>
                {children}
            </button>
        </div>
    )

}
export default Button