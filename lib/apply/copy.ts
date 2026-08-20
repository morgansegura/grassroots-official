/**
 * Bilingual strings for the scholarship application.
 *
 * Spanish is a first-class locale, not a courtesy translation — much of the
 * South Bay is Spanish-dominant and an English-only need-based intake filters
 * out part of the population GRF exists to serve.
 *
 * TODO(grf): have a native Spanish speaker from the community review this copy
 * before launch. It is careful, but it is not a substitute for someone who
 * speaks the way these families speak.
 */

import type { Locale } from "./fields";

type Strings = {
  title: string;
  intro: string;
  langLabel: string;
  stepOf: (n: number, total: number) => string;
  stepNames: string[];

  back: string;
  next: string;
  submit: string;
  submitting: string;

  required: string;
  optional: string;

  // Step 1
  s1Heading: string;
  relationship: string;
  relationshipOptions: Record<string, string>;
  applicantName: string;
  email: string;
  phone: string;

  // Step 2
  s2Heading: string;
  s2Note: string;
  playerFirstName: string;
  playerLastName: string;
  playerBirthYear: string;
  club: string;
  clubHelp: string;

  // Step 3
  s3Heading: string;
  s3Note: string;
  householdSize: string;
  incomeBracket: string;
  incomeOptions: Record<string, string>;
  assistance: string;
  assistanceHelp: string;
  assistanceOptions: Record<string, string>;
  costs: string;
  costsOptions: Record<string, string>;
  needDescription: string;
  needDescriptionHelp: string;

  // Step 4
  s4Heading: string;
  consentVerify: string;
  attestation: string;
  privacyNote: string;

  // Result
  successHeading: string;
  successBody: string;
  errorHeading: string;
  errorBody: string;

  // Validation
  vRequired: string;
  vEmail: string;
  vYear: string;
  vShort: string;
};

const en: Strings = {
  title: "Apply for a scholarship",
  intro:
    "Need-based support for club soccer in San Diego County. No auditions, no tryout results, no merit gates — this is about cost, not ability. Everything you share stays confidential and is seen only by the people reviewing applications.",
  langLabel: "Español",
  stepOf: (n, total) => `Step ${n} of ${total}`,
  stepNames: ["About you", "The player", "Household", "Consent"],

  back: "Back",
  next: "Continue",
  submit: "Submit application",
  submitting: "Sending…",

  required: "Required",
  optional: "Optional",

  s1Heading: "About you",
  relationship: "Your relationship to the player",
  relationshipOptions: {
    parent: "Parent",
    guardian: "Guardian",
    player: "I am the player",
    "club-staff": "Club staff or coach",
    other: "Other",
  },
  applicantName: "Your full name",
  email: "Email",
  phone: "Phone",

  s2Heading: "The player",
  s2Note:
    "If the player is not on a team yet, that is fine — say so under club below.",
  playerFirstName: "Player's first name",
  playerLastName: "Player's last name",
  playerBirthYear: "Player's birth year",
  club: "Club or program",
  clubHelp:
    "The club they play with now, or the one they hope to join. Write “not playing yet” if neither applies.",

  s3Heading: "Household and need",
  s3Note:
    "We do not ask for pay stubs, tax returns, or documents of any kind here. If your application moves forward, your club's family services contact confirms the details with you directly.",
  householdSize: "How many people live in your household?",
  incomeBracket: "Approximate annual household income",
  incomeOptions: {
    "under-25k": "Under $25,000",
    "25k-40k": "$25,000 – $40,000",
    "40k-60k": "$40,000 – $60,000",
    "60k-80k": "$60,000 – $80,000",
    "over-80k": "Over $80,000",
    "prefer-not-to-say": "Prefer not to say",
  },
  assistance: "Does your household receive any of these?",
  assistanceHelp: "Select any that apply. This helps confirm need quickly.",
  assistanceOptions: {
    "school-meals": "Free or reduced-price school meals",
    calfresh: "CalFresh (SNAP)",
    "medi-cal": "Medi-Cal",
    wic: "WIC",
    none: "None of these",
  },
  costs: "What would the scholarship help cover?",
  costsOptions: {
    tuition: "Club tuition or season fees",
    kit: "Uniform or kit",
    equipment: "Equipment (boots, ball, bag)",
    clinic: "Clinic or camp fees",
  },
  needDescription: "Anything you want us to know",
  needDescriptionHelp:
    "A few sentences is plenty. What would happen without help this season? There is no wrong answer here.",

  s4Heading: "Consent",
  consentVerify:
    "I allow Grassroots Foundation to contact the club named above to confirm enrollment and cost.",
  attestation:
    "The information I have given is accurate to the best of my knowledge.",
  privacyNote:
    "Your application is seen only by the people reviewing it. We never sell or share your information. Awards are paid directly to the club, never to a family.",

  successHeading: "Application received",
  successBody:
    "Thank you. You will hear from us within 10 business days. If we need anything else, we will reach out using the contact details you gave.",
  errorHeading: "That did not send",
  errorBody:
    "Something went wrong on our end and your application was not submitted. Please try again, or email us and we will take it that way.",

  vRequired: "This one is needed",
  vEmail: "Please check this email address",
  vYear: "Please enter a 4-digit year",
  vShort: "A little more detail helps",
};

const es: Strings = {
  title: "Solicite una beca",
  intro:
    "Apoyo económico para el fútbol de club en el condado de San Diego. Sin pruebas, sin resultados de tryouts, sin requisitos de mérito — esto se trata del costo, no de la habilidad. Todo lo que comparta es confidencial y solo lo ven las personas que revisan las solicitudes.",
  langLabel: "English",
  stepOf: (n, total) => `Paso ${n} de ${total}`,
  stepNames: ["Sobre usted", "El jugador", "Hogar", "Consentimiento"],

  back: "Atrás",
  next: "Continuar",
  submit: "Enviar solicitud",
  submitting: "Enviando…",

  required: "Obligatorio",
  optional: "Opcional",

  s1Heading: "Sobre usted",
  relationship: "Su relación con el jugador",
  relationshipOptions: {
    parent: "Padre o madre",
    guardian: "Tutor legal",
    player: "Yo soy el jugador",
    "club-staff": "Personal del club o entrenador",
    other: "Otro",
  },
  applicantName: "Su nombre completo",
  email: "Correo electrónico",
  phone: "Teléfono",

  s2Heading: "El jugador",
  s2Note:
    "Si el jugador aún no está en un equipo, no hay problema — indíquelo en el campo de club.",
  playerFirstName: "Nombre del jugador",
  playerLastName: "Apellido del jugador",
  playerBirthYear: "Año de nacimiento del jugador",
  club: "Club o programa",
  clubHelp:
    "El club donde juega ahora, o al que espera unirse. Escriba “aún no juega” si ninguno aplica.",

  s3Heading: "Hogar y necesidad",
  s3Note:
    "No pedimos talones de pago, declaraciones de impuestos ni documentos de ningún tipo aquí. Si su solicitud avanza, el contacto de servicios familiares de su club confirmará los detalles directamente con usted.",
  householdSize: "¿Cuántas personas viven en su hogar?",
  incomeBracket: "Ingreso anual aproximado del hogar",
  incomeOptions: {
    "under-25k": "Menos de $25,000",
    "25k-40k": "$25,000 – $40,000",
    "40k-60k": "$40,000 – $60,000",
    "60k-80k": "$60,000 – $80,000",
    "over-80k": "Más de $80,000",
    "prefer-not-to-say": "Prefiero no decir",
  },
  assistance: "¿Su hogar recibe alguno de estos?",
  assistanceHelp:
    "Seleccione los que apliquen. Esto ayuda a confirmar la necesidad rápidamente.",
  assistanceOptions: {
    "school-meals": "Comidas escolares gratis o a precio reducido",
    calfresh: "CalFresh (SNAP)",
    "medi-cal": "Medi-Cal",
    wic: "WIC",
    none: "Ninguno de estos",
  },
  costs: "¿Qué ayudaría a cubrir la beca?",
  costsOptions: {
    tuition: "Cuota del club o de la temporada",
    kit: "Uniforme",
    equipment: "Equipo (zapatos, balón, mochila)",
    clinic: "Cuotas de clínica o campamento",
  },
  needDescription: "Cualquier cosa que quiera que sepamos",
  needDescriptionHelp:
    "Unas cuantas frases son suficientes. ¿Qué pasaría sin ayuda esta temporada? Aquí no hay respuestas incorrectas.",

  s4Heading: "Consentimiento",
  consentVerify:
    "Autorizo a Grassroots Foundation a comunicarse con el club indicado arriba para confirmar la inscripción y el costo.",
  attestation:
    "La información que he proporcionado es correcta según mi mejor conocimiento.",
  privacyNote:
    "Su solicitud solo la ven las personas que la revisan. Nunca vendemos ni compartimos su información. Las becas se pagan directamente al club, nunca a la familia.",

  successHeading: "Solicitud recibida",
  successBody:
    "Gracias. Le responderemos dentro de 10 días hábiles. Si necesitamos algo más, nos comunicaremos con los datos que nos dio.",
  errorHeading: "No se pudo enviar",
  errorBody:
    "Hubo un problema de nuestro lado y su solicitud no se envió. Intente de nuevo, o escríbanos por correo y la recibimos por esa vía.",

  vRequired: "Este campo es necesario",
  vEmail: "Revise este correo electrónico",
  vYear: "Ingrese un año de 4 dígitos",
  vShort: "Un poco más de detalle ayuda",
};

export const COPY: Record<Locale, Strings> = { en, es };
export type ApplyStrings = Strings;
