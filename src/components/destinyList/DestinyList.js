import destiniListStyles from "./destiniListStyles";
import { ScrollView } from "react-native";
import DestinationListBox from "../../commons/DestinationListBox";

function DestinyList(props) {
  return (
    <ScrollView contentContainerStyle={destiniListStyles.scrollView}>
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
  );
}

export default DestinyList;
