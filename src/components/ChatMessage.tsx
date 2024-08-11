import { Typewriter } from 'react-simple-typewriter';

interface ChatMessageProps {
  message: string;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div style={{ whiteSpace: 'pre-line' }}>
      <Typewriter
        words={[message]}
        cursor
        cursorStyle="_"
        typeSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
}

export default ChatMessage;
