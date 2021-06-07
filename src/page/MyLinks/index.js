import React, { useEffect, useState } from "react";

import { ActivityIndicator, Modal } from "react-native";

import { useIsFocused } from "@react-navigation/native";

import ListItem from "../../components/ListItem";
import Menu from "../../components/Menu";
import StatusBarPage from "../../components/StatusBarPage";
import ModalLink from "../../components/ModalLink";

import { deleteLink, getLinkSave } from "../../utils/storageLink";

import {
  Container,
  Title,
  ListLinks,
  ContainerEmpty,
  WarningText,
} from "./styles";

export default function MyLinks() {
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);
  const [links, setLinks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getLinks() {
      const result = await getLinkSave("sujeitolinks");
      setLinks(result);
      setLoading(false);
    }
    getLinks();
  }),
    [isFocused];

  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  }
  async function handleDelete(id) {
    const result = await deleteLink(links, id);
    setLinks(result);
  }
  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle={"light-content"} />
      <Menu />
      <Title>Meus Links</Title>
      {loading && (
        <ContainerEmpty>
          <ActivityIndicator color="white" size={25} />
        </ContainerEmpty>
      )}
      {!loading && links.length === 0 && (
        <ContainerEmpty>
          <WarningText>Você ainda não possui nenhum link :( </WarningText>
        </ContainerEmpty>
      )}

      <ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            selectedItem={handleItem}
            deleteItem={handleDelete}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalLink onClose={() => setModalVisible(false)} data={data} />
      </Modal>
    </Container>
  );
}
