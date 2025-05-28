
interface CompetencyCardProps {
    title: string;
    description: string;
}
const CompetencyCard: React.FC<CompetencyCardProps> = ({title, description}) => {
    return <div className="bg-background2 rounded-2xl border border-actionprimary shadow shadow-actionprimary p-4 flex flex-col">
        <p>{description}</p>
        <h4 className="text-end font-semibold mt-2">{title}</h4>
    </div>
}


export default CompetencyCard;