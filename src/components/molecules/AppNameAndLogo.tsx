interface HeaderRightProps {
  appName?: string
  logo?: React.ReactNode
  hideNameOnMobile?: boolean
}

export const AppNameAndLogo: React.FC<HeaderRightProps> = ({
  appName,
  hideNameOnMobile = true,
  logo,
}) => {  
  const visibiltyNameClasses = hideNameOnMobile ? 'hidden md:flex' : 'flex'

  return (
    <div className="flex items-center mx-1 md:mx-10 space-x-3 md:space-x-4">
      {/* <SearchInput />*/}
      {/* <IconButton icon={Bell} badge />*/}
      {/* <IconButton icon={Settings} hiddenOnMobile />*/}
      <div className={`${visibiltyNameClasses} items-center space-x-3`}>
        <span className="font-regular text-sm text-gray-700 lg:inline underline">
          {appName || 'Application Name'}
        </span>
      </div>
      {logo}
    </div>
  )
}
