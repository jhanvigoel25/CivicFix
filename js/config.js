// js/config.js
// Project API Keys Configurations
// In local dev, keys come from env.js (gitignored). On Vercel/production env.js
// doesn't exist — the app gracefully falls back to simulation mode.
// See env.example.js for the required shape.

// Start with placeholder defaults — always safe for simulation mode.
var env = window.__CIVICFIX_ENV__ || {};
var CONFIG = {
  GOOGLE_AI_STUDIO_KEY: env.GOOGLE_AI_STUDIO_KEY || 'YOUR_GOOGLE_AI_STUDIO_KEY',
  GOOGLE_MAPS_KEY: env.GOOGLE_MAPS_KEY || 'YOUR_GOOGLE_MAPS_KEY'
};
window.CONFIG = CONFIG;

// If env.js exists (local dev), it already set window.__CIVICFIX_ENV__ above.
// If not (Vercel), window.__CIVICFIX_ENV__ stays undefined and app uses
// simulation mode with Leaflet fallback maps — no API keys exposed.

const MapHelper = {
  isGoogleMapsAvailable() {
    return typeof google !== 'undefined' && typeof google.maps !== 'undefined' && !window.googleMapsFailed;
  }
};
window.MapHelper = MapHelper;

