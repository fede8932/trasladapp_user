import React from "react";
import { View, Text, Image } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { sheetAppStyles } from "./sheetAppStyles";
import { ScrollView } from "react-native-gesture-handler";
import ButtonReserva from "../../commons/ButtonReserva";
import LinkFavoritos from "../../commons/LinkFavoritos";
import CustomSeperator from "../../commons/CustomSeperator";
import DestinationListBox from "../../commons/DestinationListBox";
import ModalContainer from "../../containers/ModalContainer";

const SheetApp = (props) => {
  const { bottomSheetRef, snapPoints, handleSheetChanges, indexCero } = props;
  return (
    <View style={sheetAppStyles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={sheetAppStyles.contentContainer}>
          <View>
            <View style={sheetAppStyles.formContainer}>
              <View style={sheetAppStyles.saludoConsulta}>
                <Text style={sheetAppStyles.saludo}>
                  ¡Hola, Leonel Andres Messi!
                </Text>
                <Text style={sheetAppStyles.consulta}>
                  ¿A donde te llevamos?
                </Text>
              </View>
              <Image
                style={sheetAppStyles.imagen}
                source={require("../../assets/iconos/autoPersona.png")}
                resizeMethod="scale"
              />
            </View>
            <View style={sheetAppStyles.buttonContainer}>
              <ModalContainer
                OpenModal={ButtonReserva}
                text="Ingresa tu destino"
                styleContainer="containerLonge"
                styleButton="reserva"
                styleText="textoReserva"
                iconName="search"
                iconType="FontAwesome5"
                iconSize={20}
                iconColor="#ffe700"
                close={indexCero}
                modo="Tu viaje en TrasladAPP"
              />
              <ModalContainer
                OpenModal={ButtonReserva}
                text="Reserva tu asiento"
                styleContainer="containerSmall"
                styleButton="reserva"
                styleText="textoReserva"
                iconName="calendar"
                iconType="FontAwesome5"
                iconSize={20}
                iconColor="#ffe700"
                close={indexCero}
                modo="Encontrá tu destino"
              />
            </View>
            <View style={sheetAppStyles.favoritosContainer}>
              <LinkFavoritos
                text="Casa"
                iconName="arrow-right"
                iconType="FontAwesome"
                iconSize={10}
                iconColor="#7A7A7A"
              />
              <LinkFavoritos
                text="Trabajo"
                iconName="arrow-right"
                iconType="FontAwesome"
                iconSize={10}
                iconColor="#7A7A7A"
              />
              <LinkFavoritos
                text="Favoritos"
                iconName="arrow-right"
                iconType="FontAwesome"
                iconSize={10}
                iconColor="#7A7A7A"
              />
            </View>
            <CustomSeperator
              styleContainer="sheetContainer"
              styleSeparator="sheetSeparator"
            />
            <ScrollView style={sheetAppStyles.scrollView}>
              <DestinationListBox
                titulo="Estadio Monumental de River Plate"
                direccion="Av. Libertador 91218, CABA"
              />
              <DestinationListBox
                titulo="Estadio Monumental de River Plate"
                direccion="Av. Libertador 91218, CABA"
              />
              <DestinationListBox
                titulo="Estadio Monumental de River Plate"
                direccion="Av. Libertador 91218, CABA"
              />
              <DestinationListBox
                titulo="Estadio Monumental de River Plate"
                direccion="Av. Libertador 91218, CABA"
              />
              <DestinationListBox
                titulo="Estadio Monumental de River Plate"
                direccion="Av. Libertador 91218, CABA"
              />
              <DestinationListBox
                titulo="Estadio Monumental de River Plate"
                direccion="Av. Libertador 91218, CABA"
              />
              <DestinationListBox
                titulo="Estadio Monumental de River Plate"
                direccion="Av. Libertador 91218, CABA"
              />
              <DestinationListBox
                titulo="Estadio Monumental de River Plate"
                direccion="Av. Libertador 91218, CABA"
              />
            </ScrollView>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default SheetApp;
