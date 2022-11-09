var map = L.map("map").setView([27.686, 85.278], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const fellows = [
  {
    name: "Prasaya Acharya",
    lat: 27.686,
    long: 85.278,
    image: "https://avatars.githubusercontent.com/u/47562404?v=4",
  },
];

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
});
