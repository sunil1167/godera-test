import React from 'react'
import { InputContainer, InputLabel,InputField } from './style'

export default function TextField({
    label,
    type,
    ...props
}) {
    return (
        <InputContainer>
            <InputLabel>
                {label}
            </InputLabel>
            <InputField type={type} />
        </InputContainer>
      
    )
}