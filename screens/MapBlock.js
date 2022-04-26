import MapView, { Marker } from "react-native-maps";

export default function MapBlock() {
  return (
    <MapView
      style={{
        height: "50%",
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      initialRegion={{
        latitude: 56.007492489314735,
        longitude: 92.85344630533449,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{
          latitude: 56.007492489314735,
          longitude: 92.85344630533449,
        }}
        title={"парк"}
        description={"Центральный Парк им. М. Горького"}
        key={"park"}
      />
      <Marker
        coordinate={{
          latitude: 56.008847585905855,
          longitude: 92.86880158595864,
        }}
        title={"театр"}
        description={"Театр оперы и балета им. Д. А. Хворостовского"}
        key={"theatre"}
      />
    </MapView>
  );
}
