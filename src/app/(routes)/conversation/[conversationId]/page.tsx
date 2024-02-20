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

export default function ChatPage({params, searchParams}: ChatPageProps) {

  return (
    <>
      <ConversationHeader
        name={searchParams.name}
        picture={searchParams.picture}
      />
      <ConversationUI
        conversationId={params.conversationId}
      />
    </>
  );
}