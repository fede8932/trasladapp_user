import { View, Button } from "react-native";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.openDrawer()} title="Go back home" />
    </View>
  );
}

export default NotificationsScreen;
