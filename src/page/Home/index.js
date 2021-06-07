import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import {
  Container,
  Logo,
  ContainerContent,
  SubTitle,
  Title,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonText,
} from "./styles";
import ModalLink from "../../components/ModalLink";
import { api } from "../../services/api";
import { saveLink } from "../../utils/storageLink";

export default function Home() {
  const [input, setInput] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  async function handlerShortLink() {
    setLoading(true);
    try {
      const response = await api.post("/shorten", {
        long_url: input,
      });

      setModalVisible(true);
      Keyboard.dismiss();
      setData(response.data);

      saveLink("sujeitolinks", response.data);

      setInput("");
      setLoading(false);
    } catch (error) {
      alert("Ops parece que algo deu errado! ");
      Keyboard.dismiss();
      setInput("");
      setLoading(false);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["#1DDBB9", "#132742"]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StatusBarPage backgroundColor="#1DDBB9" barStyle={"light-content"} />
        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "padding"}
          enabled
        >
          <Container>
            <Logo source={require("../../assets/Logo.png")} />
          </Container>
          <ContainerContent>
            <Title>SujeitoLink</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>
            <ContainerInput>
              <BoxIcon>
                <Feather name="link" color="white" size={22} />
              </BoxIcon>
              <Input
                value={input}
                placeholder="Cole seu link..."
                placeholderTextColor="white"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                onChangeText={(text) => setInput(text)}
              />
            </ContainerInput>
            <ButtonLink onPress={handlerShortLink}>
              {loading ? (
                <ActivityIndicator size={32} color="#121212" />
              ) : (
                <ButtonText>Gerar Link</ButtonText>
              )}
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>
        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} data={data} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
