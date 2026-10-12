/**
 * Dental ISA - Datos de configuración y contenido editable
 * Puedes modificar los textos, agregar o quitar reseñas y servicios en este archivo.
 */

const dentalData = {
  clinic: {
    name: "Dental ISA",
    tagline: "Cuidado dental especializado y sonrisas saludables",
    phone: "+52 664 809 8071",
    phoneRaw: "+526648098071",
    whatsappMessage: "Hola, me gustaría agendar una cita de valoración en Dental ISA.",
    address: {
      street: "Terrazas del Valle, #25603",
      postalCode: "22246",
      city: "Tijuana",
      state: "B.C.",
      full: "Terrazas del Valle, #25603, 22246 Tijuana, B.C."
    },
    schedules: [
      { days: "Lunes a Viernes", hours: "10:00 am a 6:00 pm" },
      { days: "Sábado", hours: "10:00 am a 5:00 pm" },
      { days: "Domingo", hours: "Bajo cita previa" }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Terrazas+del+Valle+25603+Tijuana+BC"
  },

  // Servicios de la clínica (con imagen de muestra para fácil reemplazo)
  services: [
    {
      id: "brackets",
      name: "Brackets y Ortodoncia",
      shortDesc: "Alineación dental progresiva con brackets metálicos y estéticos para una mordida funcional.",
      details: ["Alineación funcional", "Control mensual", "Opciones estéticas"],
      image: "assets/images/placeholder.jpg"
    },
    {
      id: "coronas",
      name: "Coronas Dentales",
      shortDesc: "Restauración duradera y estética para piezas dañadas o debilitadas con acabado natural.",
      details: ["Porcelana y zirconio", "Protección completa", "Color adaptado"],
      image: "assets/images/placeholder.jpg"
    },
    {
      id: "implantes",
      name: "Implantes Dentales",
      shortDesc: "Reemplazo de piezas perdidas con raíces de titanio integradas de máxima estabilidad.",
      details: ["Fijación permanente", "Estética idéntica", "Prevención ósea"],
      image: "assets/images/placeholder.jpg"
    },
    {
      id: "placas",
      name: "Placas y Prótesis",
      shortDesc: "Soluciones protésicas totales y parciales adaptadas a tu comodidad para masticar con confianza.",
      details: ["Ajuste anatómico", "Materiales ligeros", "Fácil higiene"],
      image: "assets/images/placeholder.jpg"
    },
    {
      id: "endodoncias",
      name: "Endodoncias",
      shortDesc: "Tratamiento de conductos especializado para salvar tus piezas dentales y erradicar dolor.",
      details: ["Alivio de dolor", "Conservación de pieza", "Técnicas suaves"],
      image: "assets/images/placeholder.jpg"
    },
    {
      id: "resinas",
      name: "Resinas Estéticas",
      shortDesc: "Reparación de caries y pequeñas fracturas con tonos idénticos a tu esmalte original.",
      details: ["Acabado invisible", "Sin mercurio", "Sesión rápida"],
      image: "assets/images/placeholder.jpg"
    },
    {
      id: "limpieza",
      name: "Limpieza Dental Profiláctica",
      shortDesc: "Remoción profunda de placa bacteriana, sarro y manchas superficiales con pulido suave.",
      details: ["Ultrasonido dental", "Pulido de esmalte", "Encías saludables"],
      image: "assets/images/placeholder.jpg"
    },
    {
      id: "extracciones",
      name: "Extracciones Dentales",
      shortDesc: "Procedimientos quirúrgicos seguros y mínimamente invasivos con recuperación asistida.",
      details: ["Muelas del juicio", "Anestesia localizada", "Atención postoperatoria"],
      image: "assets/images/placeholder.jpg"
    }
  ],

  // Reseñas reales de Google (sección Reviews)
  reviews: [
    {
      id: 1,
      author: "Karen Martínez Pardo",
      rating: 5,
      date: "Hace 2 meses",
      comment: "Me gusta la atención que da la Dra. Flor, ya que te explica detalladamente lo que te está haciendo y es delicada a la hora de trabajar. Está pendiente de cada detalle. También hay buena limpieza del lugar, lo recomiendo."
    },
    {
      id: 2,
      author: "Sonia Machado",
      rating: 5,
      date: "Hace 2 meses",
      comment: "Excelente atención, quedé muy satisfecha con el trabajo. Súper recomendada."
    },
    {
      id: 3,
      author: "Luzelena Santos",
      rating: 5,
      date: "Hace 4 meses",
      comment: "Excelente servicio y muy amable la Dra. Flor. Siempre vengo aquí para que me hagan resinas y limpiezas, y siempre estoy satisfecha con el resultado."
    },
    {
      id: 4,
      author: "El señor Taco",
      rating: 5,
      date: "Hace 4 meses",
      comment: "Muy buena atención y el trabajo que me hicieron excelente."
    },
    {
      id: 5,
      author: "Fanny Arambula Rodríguez",
      rating: 5,
      date: "Hace 4 meses",
      comment: "Muy recomendada."
    },
    {
      id: 6,
      author: "Omar Bojorquez",
      rating: 5,
      date: "Hace 4 meses",
      comment: "Excelente servicio, recomendado 100%."
    },
    {
      id: 7,
      author: "Ceci Robles",
      rating: 5,
      date: "Hace 4 meses",
      comment: "Excelente servicio, las recomiendo ampliamente, muy profesionales en su atención."
    },
    {
      id: 8,
      author: "Joel Montes Aispuro",
      rating: 5,
      date: "Hace 4 meses",
      comment: "Muy profesionales, excelente servicio."
    },
    {
      id: 9,
      author: "Rodolfo Luna",
      rating: 5,
      date: "Hace 4 meses",
      comment: "Acudí para cambio de resina y retirar caries algo complicadas. Estoy profundamente agradecido con la Dra. Daniela por su atención profesional y su infinita paciencia en realizar el procedimiento de la manera más cuidadosa y gentil, ya que he tenido muy mala experiencia con respecto al dolor y sensibilidad, sobre todo con la aplicación de la anestesia. Con la Dra. Daniela 10/10, no sentí absolutamente dolor. Me fue recomendada y personalmente recomiendo ampliamente a las doctoras. Continuaré mi seguimiento con mayor confianza y tranquilidad de estar en buenas manos."
    },
    {
      id: 10,
      author: "Luis Montes",
      rating: 5,
      date: "Hace 4 meses",
      comment: "Excelente atención, muy agradable."
    },
    {
      id: 11,
      author: "Daniela Guadalupe Ontiveros Robles",
      rating: 5,
      date: "Hace 4 meses",
      comment: "Excelente atención, ambas doctoras te explican detalladamente cada procedimiento y son muy cuidadosas al momento de trabajar. Tratamientos de calidad, lo recomiendo mucho."
    },
    {
      id: 12,
      author: "Diego Arambula",
      rating: 5,
      date: "Hace 4 meses",
      comment: "Recomendados, te saben explicar bien el tratamiento. Sin duda volvería a ir para mis chequeos."
    },
    {
      id: 13,
      author: "Osvaldo León",
      rating: 5,
      date: "Hace 9 meses",
      comment: "Excelente servicio, la atención al cliente bastante buena. Te explican muy bien lo que necesitas para tener tus dientes en las mejores condiciones."
    },
    {
      id: 14,
      author: "Diego Arambula",
      rating: 5,
      date: "Hace 11 meses",
      comment: "Excelente atención, muy limpio el lugar y muy buenos trabajos."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = dentalData;
}
