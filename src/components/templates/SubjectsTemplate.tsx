import { useRouter } from '@tanstack/react-router'

import AsignatureCard from '@/components/molecules/AsignatureCard'
import { ElementGrid } from '@/components/layout/ElementGrid'

interface SubjectsProps {
  asignaciones: Array<AsignacionAsignatura>
}

function SubjectsTemplate({ asignaciones }: SubjectsProps) {
  const router = useRouter()
  return (
    <ElementGrid>
      {asignaciones.map((asignature) => (
        <AsignatureCard
          key={asignature.id}
          title={asignature.asignatura.nombre}
          description={asignature.asignatura.objetivos}
          className="hover:shadow-md cursor-pointer"
          onClick={() =>
            router.navigate({
              to: '/dashboard/subject/$subjectId',
              params: {
                subjectId: asignature.id.toString(),
              },
            })
          }
        />
      ))}
    </ElementGrid>
  )
}

export default SubjectsTemplate
