import { View, Button } from "react-native";
import SheetApp from "../components/sheet/SheetApp";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }}>
      <SheetApp />
    </View>
  );
}

export default NotificationsScreen;
