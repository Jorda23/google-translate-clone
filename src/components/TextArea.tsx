import { Form } from 'react-bootstrap'
import React, { type FC } from 'react'
import { SectionType } from '../interface/types.d'

interface Props {
  loading?: boolean
  onChange: (value: string) => void
  value: string
  type: SectionType
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}

export const TextArea: FC<Props> = ({ loading, value, onChange, type }) => {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      autoFocus={type === SectionType.From}
      disabled={type === SectionType.To}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}
