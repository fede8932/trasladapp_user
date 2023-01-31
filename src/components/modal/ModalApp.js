import React from "react";
import { Modal, Text, Pressable, View } from "react-native";
import { modalAppStyles } from "./modalAppStyles";
import CustomButton from "../../commons/CustomButton";

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
            <View style={modalAppStyles.closeContainer}>
              <CustomButton
                Press={() => {
                  setModalVisible(!modalVisible);
                }}
                iconName="close"
                iconType="MaterialCommunityIcons"
                iconSize={22}
                iconColor="#C0C0C0"
              />
            </View>
            <View style={{width: 200, height: 100, backgroundColor: "red"}}></View>
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
