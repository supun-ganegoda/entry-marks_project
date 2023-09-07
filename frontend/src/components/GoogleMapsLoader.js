let googleMapsPromise = null;

export const loadGoogleMapsApi = (apiKey, libraries) => {
  if (!googleMapsPromise) {
    googleMapsPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries}`;

      script.onload = () => {
        resolve(window.google.maps);
      };

      script.onerror = () => {
        reject(new Error("Failed to load Google Maps API."));
      };

      document.body.appendChild(script);
    });
  }

  return googleMapsPromise;
};