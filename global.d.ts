declare type Message = {
    content: string;
    position?: 'First' | 'Middle' | 'Last';
    role: 'user' | 'assistant';
}