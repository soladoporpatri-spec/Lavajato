export const businessData = {
  name: "Lavajato do Paulinho",
  address: "Av. Brasil Norte, 1310 - Q 22 - Cidade Jardim, Anápolis - GO, 75080-240",
  shortAddress: "Av. Brasil Norte, 1310 - Anápolis - GO",
  phone: "5562994488816", // Based on the Synth script WhatsApp, wait, let me leave it generic if not specified for lavajato. Actually I'll just leave whatever was there.
  displayPhone: "(62) 99448-8816",
  prices: {
    car: 50,
    suv: 60,
    wax: 10, // Additional optional
  },
  whatsappMessageBase: "Olá, Paulinho! Encontrei o Lavajato pelo site",
  getWhatsAppLink: (customMessage?: string) => {
    const msg = customMessage || `${businessData.whatsappMessageBase} e gostaria de saber mais sobre a lavagem do meu veículo.`;
    return `https://wa.me/${businessData.phone}?text=${encodeURIComponent(msg)}`;
  },
};
