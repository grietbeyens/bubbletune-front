import { StyleSheet, Text, View } from "react-native";
const ArchiveScreen = ({ route }) => {
  //   const { item } = route.params;
  //   const item = route.params.item;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <Text>Archive Screen</Text>
      <Text>aha</Text>
    </View>
  );
};

export default ArchiveScreen;
