if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    const data = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      timestamp: new Date().toISOString()
    };

    // Enviar los datos al endpoint correcto en Koyeb
    fetch("https://pale-gilemette-josemvegar-d745ae09.koyeb.app/api/ubicacion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }, (error) => {
    console.error("No se pudo obtener la ubicación:", error.message);
  });
} else {
  console.log("Geolocalización no soportada en este navegador.");
}
