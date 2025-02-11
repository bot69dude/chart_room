import { useEffect, useRef, useState } from 'react'
import { WS_URL } from '../config'

export type Message = {
  content: string
  sender: string
  timestamp: string
}

const useWebSocket = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [isConnected, setIsConnected] = useState(false)
  const ws = useRef<WebSocket | null>(null)

  const connect = () => {
    ws.current = new WebSocket(WS_URL)

    ws.current.onopen = () => {
      setIsConnected(true)
      console.log('WebSocket connected')
    }

    ws.current.onmessage = (event) => {
      const message: Message = JSON.parse(event.data)
      setMessages(prev => [...prev, message])
    }

    ws.current.onclose = () => {
      setIsConnected(false)
      console.log('WebSocket disconnected')
      setTimeout(() => connect(), 3000) // Reconnect after 3 seconds
    }

    ws.current.onerror = (error) => {
      console.error('WebSocket error:', error)
    }
  }

  useEffect(() => {
    connect()
    
    return () => {
      ws.current?.close()
    }
  }, [])

  const sendMessage = (content: string, sender: string) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      const message: Message = {
        content,
        sender,
        timestamp: new Date().toISOString()
      }
      ws.current.send(JSON.stringify(message))
    }
  }

  return { messages, sendMessage, isConnected }
}

export default useWebSocket