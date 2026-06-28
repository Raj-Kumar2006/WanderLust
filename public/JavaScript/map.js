// Airbnb-style Map Configuration
(function() {
  // Custom Airbnb-style marker icon
  const airbnbIcon = L.divIcon({
    className: 'airbnb-marker',
    html: `<div class="marker-pin">
            <svg viewBox="0 0 24 24" fill="#ff385c" width="32" height="32">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
           </div>`,
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -42]
  });

  // Initialize map with smooth transitions
  var map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false
  }).setView([lat, lng], 14);

  // Add zoom control to top-right
  L.control.zoom({
    position: 'topright'
  }).addTo(map);

  // OpenStreetMap standard tiles (colorful and detailed)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  // Custom Airbnb-style popup
  const popupContent = `
    <div class="airbnb-popup">
      <div class="popup-content">
        <svg viewBox="0 0 24 24" fill="#ff385c" width="16" height="16" style="margin-right:4px;">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        </svg>
        <span>Exact location provided after booking</span>
      </div>
    </div>
  `;

  // Add marker with animation
  const marker = L.marker([lat, lng], {
    icon: airbnbIcon,
    riseOnHover: true
  }).addTo(map);

  // Bind popup with custom styling
  marker.bindPopup(popupContent, {
    className: 'airbnb-popup-container',
    closeButton: false,
    minWidth: 200
  });

  // Open popup with animation
  setTimeout(() => {
    marker.openPopup();
  }, 500);

  // Smooth fly animation on load
  setTimeout(() => {
    map.flyTo([lat, lng], 14, {
      duration: 1.5,
      easeLinearity: 0.25
    });
  }, 300);

  // Enable scroll zoom on map click
  map.on('focus', function() {
    map.scrollWheelZoom.enable();
  });

  map.on('blur', function() {
    map.scrollWheelZoom.disable();
  });

})();
