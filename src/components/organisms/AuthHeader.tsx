import UniversityLogo from "../atoms/UniversityLogo"
import { AppNameAndLogo } from "../molecules/AppNameAndLogo"



const AuthHeader = () => {
    return <header className="py-3 px-4 md:py-4 md:px-6 flex items-center justify-center sticky top-0 z-20">
        <AppNameAndLogo hideNameOnMobile={false} appName="MyRubricDev" logo={<UniversityLogo/>} />
    </header>
}

export default AuthHeader