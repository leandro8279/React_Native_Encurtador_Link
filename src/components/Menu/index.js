import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";

export default function Menu() {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.openDrawer()}>
      <Feather name="menu" color="#fff" size={40} />
    </Container>
  );
}
