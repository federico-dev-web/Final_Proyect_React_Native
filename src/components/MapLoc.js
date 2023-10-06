import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const MapaLoc = ({ location }) => {

    return (
        <MapView
        showsUserLocation={true}
        region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        }}
        style={styles.map}
        />
    );
};

const styles = StyleSheet.create({
    map: {
        width: 200,
        height: 200,
        margin: 10
    }
});

export default MapaLoc;