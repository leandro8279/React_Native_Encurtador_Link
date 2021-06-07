import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscar os links salvo
export async function getLinkSave(key) {
  const myLinks = await AsyncStorage.getItem(key);
  const linkSave = JSON.parse(myLinks) || [];
  return linkSave;
}
//Salvar um link no storage.
export async function saveLink(key, newLink) {
  const linksStored = await getLinkSave(key);
  //Se tiver algum link salvo com esse mesmo ID / ou duplicado preciso ignorar
  const hasLink = linksStored.some((link) => link.id === newLink.id);
  if (hasLink) {
    return;
  }
  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
}
export async function deleteLink(links, id) {
  const myLinks = links.filter((item) => {
    return item.id !== id;
  });
  await AsyncStorage.setItem("sujeitolinks", JSON.stringify(myLinks));
  return myLinks;
}
