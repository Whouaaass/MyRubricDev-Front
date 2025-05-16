import { createFileRoute } from '@tanstack/react-router'
import uniLogo from "/unicauca-logo.png"
import Layout from '@/components/templates/Layout'
import UniversityLogo from '@/components/atoms/UniversityLogo'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <Layout appName='MyRubricDev' logo={<UniversityLogo/>} >
      <div></div>      
    </Layout>
  )
}
