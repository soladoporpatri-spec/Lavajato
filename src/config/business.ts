export const businessData = {
  name: "Lavajato do Paulinho",
  address: "Av. Brasil Norte, 1310 - Q 22 - Cidade Jardim, Anápolis - GO, 75080-240",
  shortAddress: "Av. Brasil Norte, 1310 - Anápolis - GO",
  phone: "5562999999999", // To be filled with real number
  displayPhone: "(62) 99999-9999",
  prices: {
    car: 50,
    suv: 60,
    wax: null, // Additional optional
  },
  whatsappMessageBase: "Olá, Paulinho! Encontrei o Lavajato do Paulinho pelo site",
  getWhatsAppLink: (customMessage?: string) => {
    const msg = customMessage || `${businessData.whatsappMessageBase} e gostaria de saber mais sobre a lavagem do meu veículo.`;
    return `https://wa.me/${businessData.phone}?text=${encodeURIComponent(msg)}`;
  },
};
