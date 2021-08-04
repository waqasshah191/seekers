import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        center={props.list.length ? { lat: +props.list[0].latitude, lng: +props.list[0].longitude } : { lat: -34.397, lng: 150.644 }}
    >
        {props.list.map(i => (
            <Marker
                key={i._id}
                position={{ lat: +i.latitude, lng: +i.longitude }}
            />
        ))}
    </GoogleMap>
))

const Map = ({ data = [] }) => (
    <MyMapComponent
        list={data}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyBmvvn3UPSO3T3NSXMmngtwNoxfsd8qDZE`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ width: '100%', height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
)

export default Map;