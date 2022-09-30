import { StyleSheet, Text, View } from "react-native";
const ProfileScreen = ({ route }) => {
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
      <Text>Profile Screen</Text>
      <Text>aha</Text>
    </View>
  );
};

export default ProfileScreen;
