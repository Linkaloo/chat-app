import { Box, TextField, styled } from "@mui/material"
import { useEffect, useState } from "react"
import { Button } from "./styled/Button";
import { RoomList } from "./RoomList";
import { Room } from "./Room";
import { brokerURL, brokerURLHTTP } from "../stomp/client";
import { Client } from '@stomp/stompjs';

const HomeContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "auto",
  marginRight: "auto",
  width: "60%",
  marginTop: 40
});

const TextContainer = styled(Box)({
  paddingTop: 10,
  width: "30%",
  marginLeft: 'auto',
  marginRight: 'auto'
})

const ButtonContainer = styled(Box)({
  width: "30%",
  marginLeft: 'auto',
  marginRight: 'auto',
  display: "flex",
  flexDirection: 'column',
  padding: 10,
  gap: 5

})

let stompClient: Client;

export const Home = () => {
  const [username, setUsername] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomList, setRoomList] = useState<string[]>([]);

  // establish connection on mount
  useEffect(() => {
    stompClient = new Client({
      brokerURL: brokerURL,
      onConnect: (frame) => {
        stompClient.subscribe('/topic/rooms', (message) => {
          setRoomList([...roomList, message.body]);
        })
      }
    });

    stompClient.activate();
  });

  const handleCreateRoom = () => {
    stompClient.publish({
      destination: '/app/room/create',
      body: JSON.stringify({ owner: username })
    });
  }

  const handleJoinRoom = () => {
    console.log("join room clicked");
  }

  useEffect(() => {
    console.log(selectedRoom);
  }, [selectedRoom]);

  return <HomeContainer>
    <RoomList setSelectedRoom={setSelectedRoom} />
    <TextContainer>
      <TextField
        error={username === ""}
        helperText={username ? "" : "Must Enter Username"}
        fullWidth={true}
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
    </TextContainer>
    <ButtonContainer>
      <Button onClick={handleCreateRoom}>Create a Room</Button>
      <Button onClick={handleJoinRoom}>Join Room</Button>
    </ButtonContainer>
    <Room />
  </HomeContainer>
}