export const businessData = {
  name: "Lavajato do Paulinho",
  address:
    "Av. Brasil Norte, 1310 - Q 22 - Cidade Jardim, Anápolis - GO, 75080-240",
  shortAddress: "Av. Brasil Norte, 1310 - Anápolis - GO",
  // Preservado do site publicado. Confirmar titularidade com o proprietário antes de publicar.
  phone: "5562994488816",
  displayPhone: "(62) 99448-8816",
  prices: {
    car: 50,
    suv: 60,
    wax: 10,
  },
  whatsappMessageBase: "Olá, Paulinho! Encontrei o Lavajato pelo site",
  getWhatsAppLink: (customMessage?: string) => {
    const msg =
      customMessage?.trim() ||
      `${businessData.whatsappMessageBase} e gostaria de agendar uma lavagem. Quais horários estão disponíveis?`;
    return `https://wa.me/${businessData.phone}?text=${encodeURIComponent(msg)}`;
  },
};

export const serviceMessages = {
  car: `Olá, Paulinho! Vi a lavagem para carros a partir de R$${businessData.prices.car} e queria agendar.`,
  suv: `Olá, Paulinho! Vi a lavagem para SUVs/caminhonetes a partir de R$${businessData.prices.suv} e queria agendar.`,
  wax: "Olá, Paulinho! Quero fazer a lavagem e adicionar a cera em pasta.",
  heavy:
    "Olá, Paulinho! Queria consultar o valor de guariba, lavagem por baixo/chassi ou lavagem de motor para meu veículo.",
};
