export const apiTransformGeoToAddress = ({ google, lat, lng }) => {
  const geocoder = new google.maps.Geocoder();
  const latlng = { lat, lng };

  return new Promise(resolve => {
    geocoder.geocode({ location: latlng }, resp => {
      resolve(resp[0].formatted_address);
    });
  });
};
