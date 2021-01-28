export const handleCartResume = (cart) => {
  let qtd = 0;
  let totalPrice = 0;

  if (cart) {
    cart.forEach((item) => {
      qtd += item.qtd;
      totalPrice += item.price * item.qtd;
    });
  }

  return { qtd, totalPrice };
};
