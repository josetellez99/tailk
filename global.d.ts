declare type Message = {
    id?: string;
    userId?: string;
    conversationId?: string;
    createdAt?: string;
    content: string;
    position?: 'First' | 'Middle' | 'Last';
    role: 'user' | 'assistant';
}

declare type Chat = {
    id: string;
    name: string;
    lastMessage: string;
    avatar: string;
}