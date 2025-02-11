import { FiSend } from 'react-icons/fi'

interface InputFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const InputField = ({ value, onChange, placeholder }: InputFieldProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <FiSend className="absolute right-3 top-3 text-gray-400" />
    </div>
  )
}

export default InputField