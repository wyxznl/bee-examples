import { useState } from 'react'

function useForm (initialValues) {
    const [formData, setFormData] = useState(initialValues)
    const setFormValue = (key, value) => {
        setFormData({ ...formData, [key]: value })
    }
    const resetFormValues = () => {
        setFormData(initialValues)
    }
    return [formData, setFormValue, resetFormValues]
}
export default useForm
