import { fellows } from "./fellowdata.js";

var map = L.map("map").setView([30.1606, 22.7515], 3.4);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var LeafIcon = L.Icon.extend({
  options: {
    iconSize: [35, 35],
    // iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    className: "leaflet-icon",
  },
});

fellows.forEach((fellow) => {
  var fellowIcon = new LeafIcon({ iconUrl: fellow.image });

  var marker = L.marker([fellow.lat, fellow.long], {
    icon: fellowIcon,
  }).addTo(map);

  var popup = `
                <div>
                <p><b>${fellow.name}</b></p>
                </div>`;

  marker.bindPopup(popup);
});
