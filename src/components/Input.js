import React from 'react'

export default function Input(props = {value, onChange, placeholder, type, disabled}) {
    return (
        <input className="form-control" {...props} />
    )
}
