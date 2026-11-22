// Catálogo D'Nogris Spa — tomado de las listas de precios compartidas.
window.SPA = {
  categorias: [
    {
      id: "faciales",
      nombre: "Tratamientos faciales",
      corto: "Faciales",
      intro: "Aparatología y protocolos para limpiar, hidratar y reafirmar la piel.",
      items: [
        ["Hidrafacial", 700],
        ["Perfilamiento facial con aparatología", 600],
        ["Limpieza facial profunda", 500],
        ["Dermapen", 700, "según tipo de rostro"],
        ["Rejuvenecimiento progresivo", 600],
        ["HIFU", 500]
      ]
    },
    {
      id: "corporal",
      nombre: "Tratamiento corporal por sesión",
      corto: "Corporal",
      intro: "Moldea, reafirma y relaja. Cada sesión combina varias técnicas.",
      items: [
        ["Maderoterapia por zona", 300],
        ["Reducción de brazos", 350, "lipoláser, cavitación, vacumterapia y radiofrecuencia"],
        ["Reducción de abdomen y cintura", 400, "maderoterapia, drenaje linfático manual, cavitación, lipoláser, vacumterapia y radiofrecuencia"],
        ["Reafirmante de abdomen", 500, "radiofrecuencia y HIFU"],
        ["Levantamiento de glúteos", 350, "vacumterapia, maderoterapia y electroestimulación"],
        ["Anticelulítico", 600, "ondas de choque, radiofrecuencia, vacumterapia y maderoterapia"],
        ["Masaje relajante", 600, "1 hora con aromaterapia y copa de vino"]
      ]
    },
    {
      id: "paquetes10",
      nombre: "Tratamientos de 10 sesiones",
      corto: "10 sesiones",
      intro: "Planes completos para ver resultados constantes.",
      items: [
        ["Maderoterapia 2 zonas", 2200],
        ["Reductivo de brazos", 2000],
        ["Reductivo de abdomen y cintura", 3000],
        ["Reafirmante de abdomen", 3600],
        ["Levantamiento de glúteos", 2600],
        ["Anticelulítico piernas y glúteos", 4500]
      ]
    },
    {
      id: "unas",
      nombre: "Servicios para uñas",
      corto: "Uñas",
      intro: "Manos y pies impecables, del gelish clásico al acrílico largo.",
      items: [
        ["Gelish", 150],
        ["Rubber", 200],
        ["Uñas acrílicas largo #2, un color", 250],
        ["Uñas acrílicas largo #3 y #4, un color", 300],
        ["Retiro de uñas", 100],
        ["Pedicure sencillo", 280],
        ["Pedicure spa con jelly y gelish de un color", 400]
      ]
    },
    {
      id: "cabello",
      nombre: "Cabello",
      corto: "Cabello",
      intro: "Alaciado orgánico, color y tratamientos para un cabello sano.",
      items: [
        ["Alaciado orgánico · cabello corto", 1200],
        ["Alaciado orgánico · a media espalda", 1500],
        ["Alaciado orgánico · a la cintura", 1800],
        ["Cabello abundante o extra largo", 300, "cargo adicional al alaciado", true],
        ["Botox capilar", 500],
        ["Tratamientos capilares", 600],
        ["Tinte cabello corto", 350],
        ["Tinte cabello mediano", 500],
        ["Tinte cabello largo", 600],
        ["Planchado exprés", 150]
      ]
    },
    {
      id: "cejas",
      nombre: "Cejas, pestañas y depilación",
      corto: "Cejas y cera",
      intro: "Detalles que enmarcan la mirada y una piel suave.",
      items: [
        ["Planchado de ceja", 250],
        ["Planchado de ceja con henna", 300],
        ["Pestañas de puntos", 250],
        ["Depilación con cera · cejas", 80],
        ["Depilación con cera · bigote", 120],
        ["Depilación con cera · axilas", 150],
        ["Depilación con cera · zona de bikini", 180],
        ["Depilación con cera · piernas", 200]
      ]
    }
  ],
  paquetes: [
    {
      nombre: "Fiesta Casual Básico",
      precio: 1200,
      incluye: ["Uñas acrílicas", "Pedicure", "Depilación de cejas y axilas", "Planchado de ceja", "Pestañas de puntos", "Maquillaje", "Planchado exprés u ondas"]
    },
    {
      nombre: "Fiesta Casual Premium",
      precio: 2000,
      destacado: true,
      incluye: ["Limpieza facial profunda", "Uñas acrílicas", "Pedicure spa", "Depilación de cejas, axilas y bikini", "Planchado de ceja con henna", "Pestañas de puntos", "Maquillaje", "Planchado exprés u ondas", "Tinte"]
    }
  ]
};
window.SPA.fmt = n => "$" + n.toLocaleString("es-MX");
