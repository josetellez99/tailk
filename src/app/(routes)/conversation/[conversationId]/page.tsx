import { ConversationDownBar } from "@/components/conversation/ConversationDownBar";
import { ConversationHeader } from "@/components/shared/Header";
import { Box } from "@mui/material";
import styles from './styles.module.css'
import Image from "next/image";

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
      <Box className={styles.chatContainer}>
        {/* <Image
          src="/chat-bg-sm.png"
          alt="chat background"
          layout="fill"
          objectFit="fill"
          objectPosition="center"
          className={styles.chatBg}
        >
        </Image> */}
        {/* <ChatList /> */}
      </Box>
      <ConversationDownBar />
    </>
  );
}