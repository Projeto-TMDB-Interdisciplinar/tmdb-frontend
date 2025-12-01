// src/data/countries.js

export const countries = {
    "MX": "México",
    "GT": "Guatemala",
    "SV": "El SAlvador",
    "HN": "Hoonduras",
    "NI": "Nicarágua",
    "CR": "Costa Rica",
    "PA": "Panamá",
    "CU": "Cuba",
    "HT": "Haiti",
    "DO": "República Dominicana",
    "CO": "Colombia",
    "VE": "Venezuela",
    "EC": "Equador",
    "PE": "Peru",
    "BR": "Brasil",
    "BO": "Bolívia",
    "CL": "Chile",
    "PY": "Paraguai",
    "AR": "Argentina",
    "UY": "Uruguai"
};

// Função utilitária opcional
export function getCountryName(id) {
  return countries[id] || "País desconhecido";
}
