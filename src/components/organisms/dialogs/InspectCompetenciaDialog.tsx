import { useMemo, useRef } from 'react'
import CreateRAProgramaDialog from './CreateRAProgramaDialog'
import type { MouseEventHandler } from 'react'
import DialogContainer from '@/components/molecules/dialog/DialogContainer'
import Button from '@/components/atoms/form/Button'
import CustomDialogHeader from '@/components/molecules/dialog/CustomDialogHeader'

interface InspectCompetenciaDialogProps {
  onClose: MouseEventHandler
  competencia: CompetenciaPrograma
  onCreateRA?: (data: { codigo: string; descripcion: string; idCompetencia: number }) => Promise<void>
}

const InspectCompetenciaDialog: React.FC<InspectCompetenciaDialogProps> = ({
  onClose,
  competencia,
  onCreateRA,
}) => {
  const createRaDialogRef = useRef<HTMLDialogElement>(null)

  const niveles = useMemo(() => ({
    'BASICO': 'Básico',
    'INTERMEDIO': 'Intermedio',
    'AVANZADO': 'Avanzado'
  }), [])

  return (
    <>
      <dialog ref={createRaDialogRef}>
        <CreateRAProgramaDialog
          onSubmit={onCreateRA}
          onClose={() => createRaDialogRef.current?.close()}
          idCompetencia={competencia.id}
        />
      </dialog>

      <DialogContainer onClose={onClose} className="max-w-xl">
        <CustomDialogHeader
          title="Inspeccionar Competencia"
          onClose={onClose}
        />
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Competencia details */}
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Código</h3>
                <p className="text-gray-700">{competencia.codigo}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Descripción</h3>
                <p className="text-gray-700">{competencia.descripcion}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Nivel</h3>
                <p className="text-gray-700">{niveles[competencia.nivel as keyof typeof niveles]}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4">
              <Button 
                variant="primary" 
                onClick={() => createRaDialogRef.current?.show()}
                className="w-full"
              >
                Agregar Resultado de Aprendizaje
              </Button>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outlined" onClick={onClose}>
              Cerrar
            </Button>
          </div>
        </div>
      </DialogContainer>
    </>
  )
}

export default InspectCompetenciaDialog
