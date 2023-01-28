import MapView, {
  PROVIDER_DEFAULT,
  UrlTile,
  MAP_TYPES,
} from "react-native-maps";
import mapStyles from "./mapStyles";

function Map(props) {
  return (
    <MapView
      style={mapStyles.map}
      initialRegion={{
        latitude: -34.51573256482925,
        longitude: -58.7686148953376,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      // provider={PROVIDER_DEFAULT}
      // mapType={MAP_TYPES.NONE}
    >
      {/* <UrlTile
        urlTemplate={
          "https://a.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
        }
        maximumZ={19}
      /> */}
    </MapView>
  );
}

export default Map;
