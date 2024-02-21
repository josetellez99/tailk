declare type Message = {
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