

interface SectionHeaderProps {
    title: string;
    description?: string;
    buttons?: Array<{
        label: string;
        onClick: () => void;
    }>
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, buttons = [] }) => {
    return <div className="flex flex-row justify-between items-center mb-4">
        <h2 className ="text-2xl font-medium text-gray-800 truncate">{title}</h2>
        {description ?? <p>{description}</p>}
        <div className="flex flex-col">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    onClick={button.onClick}
                    className="bg-actionprimary text-white rounded-lg min-h-10 w-40"
                >
                    {button.label}
                </button>
            ))}
        </div>
    </div>
}


export default SectionHeader