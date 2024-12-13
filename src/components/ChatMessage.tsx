import { Typewriter } from 'react-simple-typewriter';

interface ChatMessageProps {
  message: string;
  typeSpeed?: number;
}

export const ChatMessage = ({ message, typeSpeed = 50 }: ChatMessageProps) => {
  return (
    <div className="z-20" style={{ whiteSpace: 'pre-line' }}>
      <Typewriter
        cursor
        cursorStyle="_"
        delaySpeed={1000}
        key={message}
        typeSpeed={typeSpeed}
        words={[message]}
      />
    </div>
  );
};

export default ChatMessage;
