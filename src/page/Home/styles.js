import { Platform } from "react-native";
import styled from "styled-components";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === "ios" ? 35 + "px" : 15 + "px"};
`;
export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ContainerContent = styled.View`
  margin-top: ${Platform.OS === "ios" ? 25 + "%" : 15 + "%"};
`;
export const Title = styled.Text`
  color: white;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
`;
export const SubTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10%;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  width: 100%;
  border-radius: 7px;
  margin: 15px 0;
  padding-left: 15px;
  padding-right: 15px;
`;
export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  width: 11%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;
export const Input = styled.TextInput`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  font-size: 17px;
  color: white;
`;
export const ButtonLink = styled.TouchableOpacity`
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  height: 45px;
  border-radius: 7px;
  margin-bottom: 15px;
`;
export const ButtonText = styled.Text`
  font-size: 18px;
`;
