export type Language = 'en' | 'es';

export const translations = {
  // Hero Section
  hero: {
    headline: {
      en: "Leaking Roof? We Fix It This Week.",
      es: "¿Techo con Goteras? Lo Reparamos Esta Semana."
    },
    subheadline: {
      en: "Free inspections. Same-week scheduling. Serving Brownsville to McAllen.",
      es: "Inspecciones gratis. Citas esta semana. Servimos de Brownsville a McAllen."
    },
    ctaPrimary: {
      en: "Get My Free Inspection",
      es: "Solicitar Inspección Gratis"
    },
    ctaSecondary: {
      en: "Call Now",
      es: "Llamar Ahora"
    }
  },

  // Trust Badges
  trustBadges: {
    free: { en: "Free Inspection", es: "Inspección Gratis" },
    fast: { en: "Same-Week Scheduling", es: "Citas Esta Semana" },
    local: { en: "Local RGV Crews", es: "Equipo Local del Valle" },
    licensed: { en: "Licensed & Insured", es: "Licencia y Seguro" },
    financing: { en: "Financing Available", es: "Financiamiento Disponible" },
    bilingual: { en: "Hablamos Español", es: "We Speak English" }
  },

  // Urgency Bar
  urgency: {
    message: {
      en: "⚠️ Recent storms caused roof damage across the Valley—schedule your free inspection now",
      es: "⚠️ Tormentas recientes causaron daños—programa tu inspección gratis ahora"
    }
  },

  // Social Proof
  socialProof: {
    sectionTitle: {
      en: "Trusted by Homeowners Across the Valley",
      es: "La Confianza de Familias en Todo el Valle"
    },
    beforeAfter: {
      before: { en: "Before", es: "Antes" },
      after: { en: "After", es: "Después" }
    },
    stats: {
      reviews: { en: "4.9 ★ on Google (47 reviews)", es: "4.9 ★ en Google (47 reseñas)" },
      experience: { en: "10+ Years Serving the RGV", es: "10+ Años Sirviendo al Valle" },
      roofs: { en: "500+ Roofs Completed", es: "500+ Techos Completados" }
    }
  },

  // Testimonials
  testimonials: [
    {
      quote: {
        en: "They found hail damage I didn't even know about. Insurance covered everything.",
        es: "Encontraron daño de granizo que no sabía que tenía. El seguro cubrió todo."
      },
      name: "Maria",
      city: "Brownsville"
    },
    {
      quote: {
        en: "Called Monday, inspection Tuesday, repair done by Friday. Unreal.",
        es: "Llamé el lunes, inspección el martes, reparación el viernes. Increíble."
      },
      name: "James",
      city: "Harlingen"
    },
    {
      quote: {
        en: "Finally a roofer who actually showed up when they said they would.",
        es: "Por fin un techador que llegó cuando dijo que llegaría."
      },
      name: "Patricia",
      city: "McAllen"
    }
  ],

  // Services
  services: {
    sectionTitle: {
      en: "What We Do",
      es: "Nuestros Servicios"
    },
    items: [
      {
        title: { en: "Roof Repairs", es: "Reparación de Techos" },
        description: {
          en: "Leaks, storm damage, missing shingles, flashing repairs",
          es: "Goteras, daño de tormenta, tejas faltantes, reparación de tapajuntas"
        },
        icon: "wrench"
      },
      {
        title: { en: "Roof Replacement", es: "Reemplazo de Techo" },
        description: {
          en: "Complete tear-off and installation when repairs aren't enough",
          es: "Reemplazo completo cuando las reparaciones no son suficientes"
        },
        icon: "home"
      },
      {
        title: { en: "Shingle Roofing", es: "Techos de Tejas" },
        description: {
          en: "Asphalt, architectural, and impact-resistant shingles",
          es: "Tejas de asfalto, arquitectónicas y resistentes a impactos"
        },
        icon: "layers"
      },
      {
        title: { en: "Metal Roofing", es: "Techos de Metal" },
        description: {
          en: "Durable, energy-efficient, built for Texas heat",
          es: "Duradero, eficiente, hecho para el calor de Texas"
        },
        icon: "shield"
      },
      {
        title: { en: "Insurance Claims", es: "Reclamaciones de Seguro" },
        description: {
          en: "We document damage and work directly with your insurance",
          es: "Documentamos el daño y trabajamos directo con tu seguro"
        },
        icon: "fileText"
      }
    ]
  },

  // Local Trust
  localTrust: {
    headline: {
      en: "Proudly Based in Brownsville, Serving the Entire Rio Grande Valley",
      es: "Orgullosamente de Brownsville, Sirviendo Todo el Valle del Río Grande"
    },
    description: {
      en: "We're not a franchise or a 1-800 number. We're your neighbors. Our crews live and work in the Valley, and we treat your home like our own.",
      es: "No somos una franquicia ni un número 1-800. Somos tus vecinos. Nuestro equipo vive y trabaja en el Valle, y tratamos tu casa como la nuestra."
    }
  },

  // Cities
  cities: ["Brownsville", "Harlingen", "San Benito", "Weslaco", "McAllen", "Edinburg", "Pharr", "Mission"],

  // Lead Form
  form: {
    headline: {
      en: "Schedule Your Free Roof Inspection",
      es: "Programa Tu Inspección de Techo Gratis"
    },
    subheadline: {
      en: "Takes 30 seconds. We'll call within 24 hours.",
      es: "Toma 30 segundos. Te llamamos en 24 horas."
    },
    fields: {
      name: { en: "Your Name", es: "Tu Nombre" },
      phone: { en: "(956) 525-9866", es: "(956) 525-9866" },
      city: { en: "Select Your City", es: "Selecciona Tu Ciudad" },
      service: { en: "What do you need?", es: "¿Qué necesitas?" }
    },
    serviceOptions: [
      { en: "Roof Repair", es: "Reparación de Techo" },
      { en: "Roof Replacement", es: "Reemplazo de Techo" },
      { en: "Insurance Claim", es: "Reclamación de Seguro" },
      { en: "Not Sure", es: "No Estoy Seguro" }
    ],
    submit: {
      en: "Get My Free Inspection",
      es: "Solicitar Mi Inspección Gratis"
    },
    submitting: {
      en: "Submitting...",
      es: "Enviando..."
    },
    microcopy: {
      en: "✓ No obligation. No pressure. Just a free inspection.",
      es: "✓ Sin compromiso. Sin presión. Solo una inspección gratis."
    },
    errors: {
      name: { en: "Please enter your name", es: "Por favor ingresa tu nombre" },
      phone: { en: "Please enter a valid 10-digit phone number", es: "Por favor ingresa un número de 10 dígitos" },
      city: { en: "Please select your city", es: "Por favor selecciona tu ciudad" },
      service: { en: "Please select a service", es: "Por favor selecciona un servicio" }
    }
  },

  // FAQ
  faq: {
    sectionTitle: {
      en: "Frequently Asked Questions",
      es: "Preguntas Frecuentes"
    },
    items: [
      {
        question: { en: "Is the inspection really free?", es: "¿La inspección es realmente gratis?" },
        answer: {
          en: "Yes, 100% free with no obligation. We'll inspect your roof, show you photos of any issues we find, and give you an honest assessment. There's no pressure to buy anything.",
          es: "Sí, 100% gratis sin compromiso. Inspeccionamos tu techo, te mostramos fotos de cualquier problema, y te damos una evaluación honesta. No hay presión para comprar nada."
        }
      },
      {
        question: { en: "How fast can you come out?", es: "¿Qué tan rápido pueden venir?" },
        answer: {
          en: "We typically schedule inspections within 2-3 days, often same-week. After a major storm, wait times may be longer due to demand.",
          es: "Normalmente programamos inspecciones en 2-3 días, frecuentemente la misma semana. Después de una tormenta grande, puede haber más espera por la demanda."
        }
      },
      {
        question: { en: "Do you help with insurance claims?", es: "¿Ayudan con reclamaciones de seguro?" },
        answer: {
          en: "Absolutely. We document all damage with detailed photos, provide professional estimates, meet with your adjuster, and help you get the coverage you deserve.",
          es: "Absolutamente. Documentamos todo el daño con fotos detalladas, damos estimados profesionales, nos reunimos con tu ajustador, y te ayudamos a obtener la cobertura que mereces."
        }
      },
      {
        question: { en: "What areas do you serve?", es: "¿Qué áreas cubren?" },
        answer: {
          en: "We serve the entire Rio Grande Valley including Brownsville, Harlingen, San Benito, Weslaco, McAllen, Edinburg, Pharr, and Mission.",
          es: "Servimos todo el Valle del Río Grande incluyendo Brownsville, Harlingen, San Benito, Weslaco, McAllen, Edinburg, Pharr y Mission."
        }
      },
      {
        question: { en: "Do you offer financing?", es: "¿Ofrecen financiamiento?" },
        answer: {
          en: "Yes, we offer flexible financing options for larger projects. Ask about financing during your inspection and we'll find a solution that fits your budget.",
          es: "Sí, ofrecemos opciones de financiamiento flexibles para proyectos grandes. Pregunta sobre financiamiento durante tu inspección y encontramos una solución para tu presupuesto."
        }
      },
      {
        question: { en: "Do you speak Spanish?", es: "¿Hablan español?" },
        answer: {
          en: "Sí, hablamos español. Our entire team—office staff and crews—is fully bilingual.",
          es: "Yes, we speak Spanish. Todo nuestro equipo—oficina y cuadrillas—es completamente bilingüe."
        }
      }
    ]
  },

  // Final CTA
  finalCta: {
    headline: {
      en: "Ready to Protect Your Home?",
      es: "¿Listo para Proteger Tu Casa?"
    },
    subheadline: {
      en: "Schedule your free inspection today—no obligation, no pressure.",
      es: "Programa tu inspección gratis hoy—sin compromiso, sin presión."
    }
  },

  // Sticky Bar
  stickyBar: {
    call: { en: "Call Now", es: "Llamar Ahora" },
    quote: { en: "Free Quote", es: "Cotización Gratis" }
  },

  // Thank You Page
  thankYou: {
    headline: {
      en: "You're All Set!",
      es: "¡Listo!"
    },
    body: {
      en: "We received your request for a free roof inspection. A member of our team will call you within 24 hours to schedule a time that works for you.",
      es: "Recibimos tu solicitud de inspección gratis. Un miembro de nuestro equipo te llamará en 24 horas para programar una cita."
    },
    whatNext: {
      title: { en: "Here's what happens next:", es: "Esto es lo que sigue:" },
      steps: {
        en: [
          "We'll call you within 24 hours",
          "We'll schedule a convenient time for your inspection",
          "Our inspector will document everything with photos",
          "You'll get an honest assessment—no pressure"
        ],
        es: [
          "Te llamamos en 24 horas",
          "Programamos una cita conveniente",
          "Nuestro inspector documenta todo con fotos",
          "Recibes una evaluación honesta—sin presión"
        ]
      }
    },
    cantWait: {
      en: "Can't wait? Call us now:",
      es: "¿No puedes esperar? Llámanos ahora:"
    },
    bookDirect: {
      en: "Prefer to pick your own time? Book directly:",
      es: "¿Prefieres elegir tu horario? Reserva directo:"
    },
    calPlaceholder: {
      en: "Cal.com booking will be integrated here",
      es: "Aquí se integrará la reserva de Cal.com"
    }
  },

  // Footer
  footer: {
    company: "Master Contractor",
    tagline: {
      en: "Serving the Rio Grande Valley",
      es: "Sirviendo el Valle del Río Grande"
    },
    rights: {
      en: "All rights reserved.",
      es: "Todos los derechos reservados."
    }
  }
};

export const getTranslation = <T>(obj: { en: T; es: T }, lang: Language): T => {
  return obj[lang];
};
