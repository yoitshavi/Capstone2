const parkTypesArray = [
  "National Park",
  "National Monument",
  "Recreation Area",
  "Scenic Trail",
  "Battlefield",
  "Historic",
  "Memorial",
  "Preserve",
  "Island",
  "River",
  "Seashore",
  "Trail",
  "Parkway",
];
const parkTypeEl = document.getElementById("parkType");

parkTypesArray.forEach((type) => {
  const optionEl = new Option(type, type);
  // const optionEl1 = new Option(type, type);
  parkTypeEl.appendChild(optionEl);
});
