import { Platform } from "react-native";
import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  background-color: #132742;
`;
export const Title = styled.Text`
  margin-top: ${Platform.OS === "ios" ? 35 + "%" : 20 + "%"};
  margin-left: 20px;
  font-size: 35px;
  color: white;
  font-weight: bold;
`;
export const ListLinks = styled.FlatList`
  background-color: #132742;
`;
export const ContainerEmpty = styled.View`
  margin-top: 15%;
  align-items: center;
`;
export const WarningText = styled.Text`
  font-size: 17px;
  color: white;
`;
