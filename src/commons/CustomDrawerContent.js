function CustomDrawerContent({ navigation }) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate("SomeScreen");
      }}
    />
  );
}

export default CustomDrawerContent;
