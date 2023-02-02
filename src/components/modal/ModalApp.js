import React from "react";
import { Modal, View, Text } from "react-native";
import { modalAppStyles } from "./modalAppStyles";
import CustomButton from "../../commons/CustomButton";
import AddressContainer from "../../containers/AddressContainer";
import CustomSeperator from "../../commons/CustomSeperator";

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
    close,
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
                iconColor="#484848"
              />
              <Text style={modalAppStyles.title}>Tu viaje en TrasladAPP</Text>
            </View>
            <AddressContainer />
            <CustomSeperator
              styleContainer="sheetContainer"
              styleSeparator="sheetSeparator"
            />
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
          close();
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default ModalApp;
