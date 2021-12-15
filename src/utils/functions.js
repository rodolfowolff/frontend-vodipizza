import md5 from 'md5';

// export const generateGravatar = (email) => {
//   const hashedEmail = md5(email.toLowerCase().trim());
//   return `https://www.gravatar.com/avatar/${hashedEmail}?d=identicon`;
// };

export const currencyFormatter = (value) => {
  let number = parseFloat((value / 100)).toFixed(2);
  return new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(number);
};

export const filterShares = (productShares) => {
  return productShares.map((ps) => ({
    share: ps.share.name,
    price: ps.price,
  }));
};

export const filterData = (data) => {
  return data.map((d) => d.name);
};

export const updateSelectShares = (shares, data, index) => {
  const shareList = [...shares];
  shareList[index]['share'] = data;
  return shareList;
};

export const updatePrice = (shares, e, index) => {
  const { name, value } = e.target;
  const shareList = [...shares];
  shareList[index][name] = value;
  return shareList;
};

export const updateAfterRemove = (shares, index) => {
  const shareList = [...shares];
  shareList.splice(index, 1);
  return shareList;
};
