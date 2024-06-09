import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { useState } from "react";

export const RoomList = ({ setSelectedRoom }: any) => {
  const [search, setSearch] = useState("");
  const rooms = [{ id: '123', name: 'roomy', connected: 0, totalConnections: 10 }];

  const handleSelectedRoom = (e: React.MouseEvent, room: any) => {
    setSelectedRoom(room);
    // highlight tableRow
    e.target.parentNode.style = "background-color: #d1e07d;"
  }

  return (<Box>
    <TextField label={"search"} value={search} onChange={(e) => setSearch(e.target.value)} />
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Room Id</TableCell>
            <TableCell align="center">Room Name</TableCell>
            <TableCell align="center">Connected</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.filter(room => room.name.includes(search)).map((room) => (<TableRow onClick={(e) => handleSelectedRoom(e, room)}>
            <TableCell align="center">{room.id}</TableCell>
            <TableCell align="center">{room.name}</TableCell>
            <TableCell align="center">{`${room.connected} / ${room.totalConnections}`}</TableCell>
          </TableRow>))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>)
}