export const SITE_CONFIG = {
  brandName: "Ethnic Elegance",
  supportEmail: "openrize@gmail.com",
  supportPhoneDisplay: "+1 (224) 377-9043",
  supportPhoneRaw: "+12243779043",
};

export const SUPPORT_LINKS = {
  phone: `tel:${SITE_CONFIG.supportPhoneRaw}`,
  email: `mailto:${SITE_CONFIG.supportEmail}`,
  whatsapp: `https://wa.me/${SITE_CONFIG.supportPhoneRaw.replace("+", "")}`,
};
