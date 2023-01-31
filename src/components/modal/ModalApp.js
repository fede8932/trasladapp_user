import React from "react";
import { Modal, Text, Pressable, View } from "react-native";
import { modalAppStyles } from "./modalAppStyles";

const ModalApp = (props) => {
  const {
    modalVisible,
    setModalVisible,
    OpenModal,
    text,
    styleContainer,
    iconName,
    iconSize,
    iconType,
    iconColor,
  } = props;
  return (
    <View style={modalAppStyles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        onShow={async () => {
          // await Location.requestForegroundPermissionsAsync(); // esto no va acá (soliciota el permiso para la localización)
          // let location = await Location.getCurrentPositionAsync({});
          // console.log(location);
        }}
      >
        <View style={modalAppStyles.centeredView}>
          <View style={modalAppStyles.modalView}>
            <Text style={modalAppStyles.modalText}>Hello World!</Text>
            <Pressable
              style={[modalAppStyles.button, modalAppStyles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={modalAppStyles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <OpenModal
        text={text}
        styleContainer={styleContainer}
        iconName={iconName}
        iconType={iconType}
        iconSize={iconSize}
        iconColor={iconColor}
        accion={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default ModalApp;
