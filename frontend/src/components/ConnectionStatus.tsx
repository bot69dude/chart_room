import { FaCircle } from 'react-icons/fa'

interface ConnectionStatusProps {
  isConnected: boolean
}

const ConnectionStatus = ({ isConnected }: ConnectionStatusProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
      <FaCircle className={`text-${isConnected ? 'green-500' : 'red-500'}`} />
      <span>{isConnected ? 'Connected' : 'Connecting...'}</span>
    </div>
  )
}

export default ConnectionStatus