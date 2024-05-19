export type TValues = {
  question: string,
  option: string,
}

export type TOption = {
  id: number,
  name: string,
}

export type TValidationError = {
  [key: string]: boolean
}
