import React from 'react'
import Select from 'react-select'

const options = [
  { value: '', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select options={options} />
)

