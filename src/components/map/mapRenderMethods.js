import React from "react";
import { Marker } from "google-maps-react";

export const renderViewReports = latLngArray => {
  let icon;
  return latLngArray.map((prevReport, i) => {
    if (prevReport.key === "1") {
      icon = {
        url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
      };
    } else {
      icon = {
        url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
      };
    }
    return (
      <Marker key={i} title={i} position={prevReport.coords} icon={icon} />
    );
  });
};

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

export const whatToRender = (currentCenter, currentView, latLngArray) => {
  if (currentView === "viewReports") {
    return renderViewReports(latLngArray);
  }
  if (currentView === "reportIncident") {
    return renderReportIncident(currentCenter);
  }
  return renderReportIncident();
};
