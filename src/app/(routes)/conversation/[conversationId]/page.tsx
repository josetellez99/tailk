import { ConversationHeader } from "@/components/shared/Header";
import { ConversationUI } from "@/components/conversation/ConversationUI";

interface ChatPageProps {
  params: {
    conversationId: string;
  };
  searchParams: {
    name: string;
    picture: string;
  };
}

export default async function ConversationPage({params, searchParams}: ChatPageProps) {

  const res = await fetch('http://localhost:3000/api/fetchUserMessages', {
    next: {
      tags: ['get-user-messages']
    },
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({conversationId: params.conversationId}),
  });

  const conversationMessages = await res.json();

  return (
    <>
      <ConversationHeader
        name={searchParams.name}
        picture={searchParams.picture}
      />
      <ConversationUI
        conversationMessages={conversationMessages}
        conversationId={params.conversationId}
      />
    </>
  );
}