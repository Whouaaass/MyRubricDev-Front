import { createFileRoute } from '@tanstack/react-router'
import Staff from '@/components/templates/Staff'
import DashboardLayout from '@/components/templates/DashboardLayout'
import UniversityLogo from '@/components/atoms/UniversityLogo'

export const Route = createFileRoute('/dashboard/staff')({
  component: RouteComponent,
})

const STAFF_DUMMY_DATA = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Professor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Assistant Professor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

function RouteComponent() {
  return (
    <DashboardLayout appName="MyRubricDev" title='Personal Académico' logo={<UniversityLogo/>}>
      <Staff professors={STAFF_DUMMY_DATA} />
    </DashboardLayout>
  )
}
