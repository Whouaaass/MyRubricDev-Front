import { Edit } from "lucide-react"
import type { PropsWithChildren } from "react"
import { SquaredIconButton } from "@/components/atoms/SquaredIconButton"


const OptionsHover: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="relative group hover:shadow-lg">
            {children}
            <div className="hidden group-hover:block absolute -right-0.5 -top-5 z-10 ">
                <div className="flex flex-row gap-1">
                    <SquaredIconButton icon={Edit} className="bg-actionprimary text-white shadow-lg"/>                    
                </div>
            </div>
        </div>
    )
}

export default OptionsHover