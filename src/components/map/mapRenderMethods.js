import React from "react";
import { Marker } from "google-maps-react";

// renders the map with all the markers of the previous reported incidents
// the icon of the incident the user just submitted will be displayed in a different color

// if the user goes to the view reports screen straight from home page there will not be a key for a submitted report
export const renderViewReports = incidents => {
  let icon;
  return incidents.map((prevReport, i) => {
    // TO DO: check against incoming "success id" from firebase
    if (prevReport.id === "E7akiCxACui4FEEqsa3o") {
      icon = {
        url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
      };
    } else {
      icon = {
        url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
      };
    }
    return (
      <Marker
        key={i}
        title={toString(i)}
        position={prevReport.location}
        icon={icon}
      />
    );
  });
};

// displays only one on (initally) user's current location and then can be moved around
export const renderReportIncident = currentCenter => {
  return (
    <Marker
      title={"MYCURRENTLOCATION"}
      name={"MYCURRENTLOCATION"}
      position={currentCenter}
      icon={{
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
      }}
    />
  );
};
