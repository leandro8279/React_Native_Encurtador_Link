import React, { useEffect } from "react";
import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Share,
} from "react-native";
import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl,
  Title,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import ClipBoard from "expo-clipboard";
export default function ModalLink({ onClose, data }) {
  useEffect(() => {});

  function copyLink() {
    ClipBoard.setString(data.link);
    alert("Link Copiado com sucesso! ");
  }
  async function handleShare() {
    try {
      const result = await Share.share({
        message: data.link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Activity Type");
        } else {
          console.log("Compartinhado com sucesso! ");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Modal Fechado! ");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>
        <LinkArea>
          <Title>Link encurtardo</Title>
          <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>
          <ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>
            <TouchableOpacity onPress={copyLink}>
              <Feather name="copy" color="white" size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
}
