import React from "react";
import { Swipeable } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { ActionContainer, ContainerButton, Item } from "./styles";

export default function ListItem({ data, selectedItem, deleteItem }) {
  function RightActions() {
    return (
      <ActionContainer onPress={() => deleteItem(data.id)}>
        <Feather name="trash" color="white" size={24} />
      </ActionContainer>
    );
  }
  return (
    <Swipeable renderRightActions={RightActions}>
      <ContainerButton activeOpacity={0.9} onPress={() => selectedItem(data)}>
        <Feather name="link" size={24} color="white" />
        <Item numberOfLines={1}>{data.long_url}</Item>
      </ContainerButton>
    </Swipeable>
  );
}
