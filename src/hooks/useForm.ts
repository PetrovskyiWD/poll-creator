import { ChangeEvent, FormEvent, useState } from "react"

import { TOption, TValidationError, TValues } from "../types/global.types"

const initialValues: TValues = {
  question: '',
  option: '',
}

const useForm = (callback: () => void) => {
  const [values, setValues] = useState<TValues>(initialValues)
  const [options, setOptions] = useState<TOption[]>([])
  const [errors, setErrors] = useState<TValidationError>({})

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setValues(prev => ({ ...prev, [name]: value }))
  }

  const handleAddOption = () => {
    const newOption = { id: Date.now(), name: values.option.trim() };

    if (!validateOption()) return;

    setOptions(prev => [...prev, newOption]);
    setValues(prev => ({ ...prev, option: '' }));
  }

  const handleDeleteOption = (id: number) =>
    setOptions(prev => prev.filter(option => option.id !== id))

  const validate = (): boolean => {
    const newErrors: TValidationError = {
      question: !values.question.trim().length,
      questionMark: !values.question.trim().endsWith('?'),
      options: options.length < 2
    }

    setErrors(newErrors)

    return !Object.values(newErrors).some(Boolean)
  }

  const validateOption = (): boolean => {
    const newErrors: TValidationError = {
      option: !values.option.trim().length,
      optionsUnique: options.some(option => option.name.toLowerCase() === values.option.trim().toLowerCase()),
      optionsMax: options.length > 10,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!validate()) return

    setValues(initialValues)
    setOptions([])
    callback()
  }

  return {
    values,
    options,
    errors,
    handleChange,
    handleAddOption,
    handleDeleteOption,
    handleSubmit
  }
}

export default useForm
