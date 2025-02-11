import { useState } from 'react'
import ConnectionStatus from '../components/ConnectionStatus'
import MessageList from '../components/MessageList'
import InputField from '../components/InputField'
import useWebSocket from '../hooks/useWebSocket'

const ChatPage = () => {
  const [sender, setSender] = useState('')
  const [message, setMessage] = useState('')
  const { messages, sendMessage, isConnected } = useWebSocket()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && sender.trim()) {
      sendMessage(message, sender)
      setMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Chat Room</h1>
          
          <ConnectionStatus isConnected={isConnected} />
          
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <MessageList messages={messages} />
          
          <form onSubmit={handleSubmit} className="mt-4">
            <InputField
              value={message}
              onChange={setMessage}
              placeholder="Type your message..."
            />
            <button
              type="submit"
              disabled={!isConnected || !message.trim()}
              className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatPage