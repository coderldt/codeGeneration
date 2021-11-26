class InputForm {
  constructor({ type, status } = {}) {
    this.type = type || 'test'
    this.status = status || 'text'
    this.placeholder = ''
  }
}

const typeOptions = [
  { label: 'test', key: 'test' },
  { label: 'password', key: 'password' },
  { label: 'textarea', key: 'textarea' },
]

const readonlyOptions = [
  { label: 'text', key: 'text' },
  { label: 'readonly', key: 'readonly' },
]

export { InputForm, typeOptions, readonlyOptions }