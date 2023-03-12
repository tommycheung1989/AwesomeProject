import {
  Box,
  Pressable,
  Row,
  Text,
  View,
  Column,
  Modal,
  Input,
  Button,
} from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

type Player = {
  name?: string;
  score?: number;
};
type Players = {
  player1: Player;
  player2: Player;
  player3: Player;
  player4: Player;
};
const GamePage = () => {
  const [display, setDisplay] = useState("game page");
  const [showModal, setShowModal] = useState(false);
  const [playerEditing, setPlayerEditing] = useState<number>();
  const [players, setPlayers] = useState<Players>({
    player1: { name: "john" },
    player2: { name: "tommy" },
    player3: { name: "mary" },
    player4: { name: "peterpeterpeterpeterpeterpeterpeterpeter" },
  });
  const setPlayer = (player: Players) => {
    setDisplay("pressed");
  };
  const changeName = (playerIndex: number, name: string) => {
    let playerKeys;
    let playerKey;
    if (players) {
      playerKeys = Object.keys(players);
      playerKey = playerKeys[playerIndex - 1];
    }
  };
  return (
    <Box style={styles.container}>
      <Modal isOpen={showModal}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Body>
            <Text>Enter your name!</Text>
            <Input type="text" />
            <Pressable onPress={() => setShowModal(false)}>
              <Text>done</Text>
            </Pressable>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Column space={4}>
        <Box style={styles.box}>
          <Pressable
            onPress={() => {
              setShowModal(true);
              setPlayerEditing(4);
            }}
          >
            <Text style={styles.text}>
              {players?.player4.name ?? "player 4"}
            </Text>
          </Pressable>
        </Box>
      </Column>
      <Column space={4}>
        <Box style={styles.box}>
          <Pressable
            onPress={() => {
              setShowModal(true);
              setPlayerEditing(1);
            }}
          >
            <Text style={styles.text}>
              {players?.player1?.name ?? "player 1"}
            </Text>
          </Pressable>
        </Box>
        <Box style={styles.box}>
          <Pressable
            onPress={() => {
              setShowModal(true);
            }}
          >
            <Text style={styles.text}>{playerEditing} </Text>
          </Pressable>
        </Box>
        <Box style={styles.box}>
          <Pressable
            onPress={() => {
              setShowModal(true);
              setPlayerEditing(3);
            }}
          >
            <Text style={styles.text}>
              {players?.player3?.name ?? "player 3"}
            </Text>
          </Pressable>
        </Box>
      </Column>
      <Column space={4}>
        <Box style={styles.box}>
          <Pressable
            onPress={() => {
              setShowModal(true);
              setPlayerEditing(2);
            }}
          >
            <Text style={styles.text}>
              {players?.player2.name ?? "player 2"}
            </Text>
          </Pressable>
        </Box>
      </Column>
    </Box>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    height: 150,
    width: 120,
    borderWidth: 2,
    margin: 2,
  },
  text: {
    alignContent: "center",
    justifyContent: "center",
    padding: 15,
    fontSize: 25,
    marginTop: 40,
    textAlign: "center",
  },
});

export default GamePage;
