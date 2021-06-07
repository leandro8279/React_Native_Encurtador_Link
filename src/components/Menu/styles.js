import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  top: ${Platform.OS === "ios"
    ? StatusBar.currentHeight + 60 + "px"
    : 10 + "px"};
  position: absolute;
  margin: 0 20px;
  justify-content: space-around;
  background-color: black;
`;
