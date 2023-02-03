import React from "react";
import { Modal, View, Text, ScrollView } from "react-native";
import { modalAppStyles } from "./modalAppStyles";
import CustomButton from "../../commons/CustomButton";
import AddressContainer from "../../containers/AddressContainer";
import CustomSeperator from "../../commons/CustomSeperator";
import DestinationListBox from "../../commons/DestinationListBox";
import ButtonReserva from "../../commons/ButtonReserva";
import DestinyListContainer from "../../containers/DestinyListContainer";

const ModalApp = (props) => {
  const {
    modalVisible,
    setModalVisible,
    OpenModal,
    text,
    styleContainer,
    styleButton,
    styleText,
    iconName,
    iconSize,
    iconType,
    iconColor,
    close,
    modo,
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
              <Text style={modalAppStyles.title}>{modo}</Text>
            </View>
            {modo == "Tu viaje en TrasladAPP" ? (
              <>
                <AddressContainer />
                <CustomSeperator
                  styleContainer="sheetContainer"
                  styleSeparator="sheetSeparator"
                />
                <DestinyListContainer />
              </>
            ) : (
              <Text>hola mundo</Text>
            )}
            <View style={modalAppStyles.submitContainer}>
              <ButtonReserva
                text="Continuar"
                styleContainer="containerSmall"
                styleButton="confirmacion"
                styleText="textoConfirmacion"
                accion={() => {
                  console.log("press");
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <OpenModal
        text={text}
        styleContainer={styleContainer}
        styleButton={styleButton}
        styleText={styleText}
        iconName={iconName}
        iconType={iconType}
        iconSize={iconSize}
        iconColor={iconColor}
        modo={modo}
        accion={() => {
          close();
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default ModalApp;
