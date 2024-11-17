import { Typewriter } from 'react-simple-typewriter';

interface ChatMessageProps {
  message: string;
  typeSpeed?: number;
}

export function ChatMessage({ message, typeSpeed = 50 }: ChatMessageProps) {
  return (
    <div style={{ whiteSpace: 'pre-line' }}>
      <Typewriter
        key={message}
        words={[message]}
        cursor
        cursorStyle="_"
        typeSpeed={typeSpeed}
        delaySpeed={1000}
      />
    </div>
  );
}

export default ChatMessage;
