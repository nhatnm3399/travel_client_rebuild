import GoogleMapReact from 'google-map-react';
import isNumber from "is-number"

const AnyReactComponent = () => <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
  <img alt={"open"} src={"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png"} style={{width: 36, height: 36}} />
</div>;

const GoogleMapPlugin = (props)=> {
    if(isNumber(props?.data?.latitude) && isNumber(props?.data?.longitude)) {
      console.log(1111)
      const defaultProps = {
          center: {
            lat: parseFloat(props?.data?.latitude),
            lng: parseFloat(props?.data?.longitude)
          },
          zoom: 15
      };
      return (
          <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCKbIS2qC0sJJuol4rcPZFnNiJsRfzK7j0" }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={parseFloat(props?.data?.latitude)}
            lng={parseFloat(props?.data?.longitude)}
          />
        </GoogleMapReact>
      )
    }
    else {
      return <div>Loading</div>
    }
}

export default GoogleMapPlugin