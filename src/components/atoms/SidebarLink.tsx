interface SidebarLinkProps {
  href?: string
  onClick?: () => void
  label: string
  icon?: React.ReactNode
  expanded: boolean
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  label,
  icon,
  expanded,
  href,
  onClick,
}) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className={`flex select-none items-center py-2 px-3 m-2 rounded-md hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all `}
    >
      <span className="w-5 h-5 flex items-center justify-center">
        {icon || <div className="w-4 h-4 bg-gray-500 rounded" />}
      </span>
      {expanded && <span className="ml-3">{label}</span>}
    </a>
  </li>
)
