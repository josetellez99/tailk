import { ConversationHeader } from "@/components/shared/Header";
import { ConversationUI } from "@/components/conversation/ConversationUI";
import axios from "axios"; 

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

  const res = await axios.post(`${process.env.SERVER_URL}/api/fetchUserMessages`, {
    conversationId: params.conversationId
  });

  const conversationMessages = res.data;

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