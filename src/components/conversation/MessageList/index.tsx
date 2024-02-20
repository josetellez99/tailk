import { Message } from '@/components/conversation/Message';
import styles from './styles.module.css'

interface MessageListProps {
    messages: Message[];
}

export function MessageList ({ messages } : MessageListProps) {

    return (
        <div className={styles.messageList}>
            {messages.map((message, index) => (
                <Message
                    key={index}
                    message={message.content}
                    position={message.position}
                    role={message.role}
                />
            ))}
        </div>
    );
}
