export const apiTransformGeoToAddress = ({ google, lat, lng }) => {
  const geocoder = new google.maps.Geocoder();
  const latlng = { lat, lng };

  return geocoder.geocode({ location: latlng }, res => {
    return res[0].formatted_address;
  });
};
