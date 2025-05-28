
interface AsignatureCardProps {
    title: string;
    description: string;
    color?: string;
}

const AsignatureCard: React.FC<AsignatureCardProps> = ({title, description, color}) => {
    return (
        <div className={`bg-background2 rounded-t-2xl shadow shadow-actionprimary p-4 flex flex-col ${color}`}>
            <p>{description}</p>
            <h4 className="text-end font-semibold mt-2">{title}</h4>
        </div>
    )
}


export default AsignatureCard