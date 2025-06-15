export const MEDIA_FILE = process.env.NEXT_PUBLIC_MEDIA_URL;

export const SITE_CONFIG = {
  identity: {
    name: "Chula Vista Fútbol Club",
    shortname: "Chula Vista FC",
    acronym: "CVFC",
  },
};

export const USE_LANDING =
  process.env.USE_LANDING_PAGE === "false" ? false : true;
