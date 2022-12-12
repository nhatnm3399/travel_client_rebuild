import usePlacesAutocomplete from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCKbIS2qC0sJJuol4rcPZFnNiJsRfzK7j0");
Geocode.setLanguage("vi");
Geocode.setRegion("vn")

const A = (props) => {
  const {
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (val) => {
    setValue(val, false);
    props?.setAddress(val)
    Geocode.fromAddress(val).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        // console.log(lat, lng);
        props?.setLongtitude(lng)
        props?.setLatitude(lat)
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <Combobox onSelect={handleSelect} aria-labelledby="demo">
      <ComboboxInput value={value} onChange={handleInput} style={{
          width: "100%",
          height: 40,
          padding: 10,
          outlineColor: "#2e89ff",
          background: "#fff",
          border: "1px solid #e7e7e7",
          borderRadius: 5,
        }} />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map((item) => (
              <ComboboxOption style={{
          width: "100%",
          height: 40,
          padding: 10,
          outlineColor: "#2e89ff",
          background: "#fff",
          border: "1px solid #e7e7e7",
          borderRadius: 5,
        }} key={item.place_id} value={item.description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default A;
