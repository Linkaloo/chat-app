import { Box, TextField, styled } from "@mui/material"
import { useState } from "react"
import { Button } from "./styled/Button";

const RoomContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  height: "50%",
});

const MessageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: "50%",
  backgroundColor: "#7e7b7b",
  padding: 10,
});

const TextBoxContainer = styled(Box)({
  display: 'flex',
  gap: 10,
  paddingTop: 10,
});

export const Room = () => {
  const [message, setMessage] = useState("");
  const messages = [
    { sender: "someone", message: "some message" },
    { sender: "someone", message: "some message" }
  ];

  const handleSendMessage = () => {
    console.log("handling send message");
  }

  return (
    <RoomContainer>
      <MessageContainer>
        {messages.map((m) => <Messsage>{`${m.sender}: ${m.message}`}</Messsage>)}
      </MessageContainer>

      <TextBoxContainer>
        <TextField placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button onClick={handleSendMessage}>Send</Button>
      </TextBoxContainer>
    </RoomContainer>)
};

interface MessageProps {
  children: React.ReactNode
}

const Messsage = ({ children }: MessageProps) => {
  return <TextBox>{children}</TextBox>
}

const TextBox = styled(Box)({
  fontSize: 16,
});