import { Message } from '../types/index'

interface MessageListProps {
  messages: Message[]
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div 
          key={index}
          className={`animate-message-entering flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`max-w-xs p-3 rounded-lg ${message.sender === 'You' ? 'bg-primary text-white' : 'bg-white border'}`}>
            <div className="text-sm font-medium mb-1">
              {message.sender}
            </div>
            <div className="text-sm">{message.content}</div>
            <div className="text-xs mt-1 opacity-70">
              {new Date(message.timestamp).toLocaleTimeString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MessageList