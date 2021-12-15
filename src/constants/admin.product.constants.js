import { v4 as uuidv4 } from 'uuid';

export const PRODUCT_TYPES = [
  { _id: uuidv4(), name: 'Pizza' },
  // { _id: uuidv4(), name: 'Number Cake' },
  // { _id: uuidv4(), name: 'Letter Cake' },
  // { _id: uuidv4(), name: 'Macaron' },
  // { _id: uuidv4(), name: 'Brownie' },
  // { _id: uuidv4(), name: 'Gateau Nature' },
];
// export const PRODUCT_COLORS = [
//   { _id: uuidv4(), name: 'Blanc' },
//   { _id: uuidv4(), name: 'Noir' },
//   { _id: uuidv4(), name: 'Jaune' },
//   { _id: uuidv4(), name: 'Rouge' },
//   { _id: uuidv4(), name: 'Vert' },
//   { _id: uuidv4(), name: 'Bleu' },
//   { _id: uuidv4(), name: 'Marron' },
// ];
export const PRODUCT_SHIPPING = [
  { _id: uuidv4(), name: 'Sim' },
  { _id: uuidv4(), name: 'Não' },
];
// export const BROWNIE_HAS_TOPPINGS = [
//   { _id: uuidv4(), name: 'Sim' },
//   { _id: uuidv4(), name: 'Não' },
// ];
export const MULTISELECT_INTERNATIONALIZATION = {
  allItemsAreSelected: 'Todos os itens são selecionados.',
  clearSearch: 'Limpar pesquisa',
  noOptions: 'Nenhuma opção',
  search: 'Pesquisar',
  selectAll: 'Selecionar tudo',
  selectSomeItems: 'Selecionar...',
};
export const PIZZA_SHARES = [
  { _id: uuidv4(), name: '6 partes' },
  { _id: uuidv4(), name: '8 partes' },
  { _id: uuidv4(), name: '12 partes' },
  { _id: uuidv4(), name: '16 partes' },
  { _id: uuidv4(), name: '20 partes' },
  { _id: uuidv4(), name: '24 partes' },
];
// export const MACARON_SHARES = [
//   { _id: uuidv4(), name: '12 partes' },
//   { _id: uuidv4(), name: '24 partes' },
// ];
// export const NUMBER_LETTER_CAKE_SHARES = [
//   { _id: uuidv4(), name: '6/10 partes' },
//   { _id: uuidv4(), name: '10/12 partes' },
//   { _id: uuidv4(), name: '12/15 partes' },
//   { _id: uuidv4(), name: '18/20 partes' },
//   { _id: uuidv4(), name: '20/25 partes' },
//   { _id: uuidv4(), name: '38/40 partes' },
// ];
export const PIZZA_TYPE = [
  { _id: uuidv4(), name: 'Chedddar', label: 'Chedddar', value: 'chedddar' },
  { _id: uuidv4(), name: 'Queijo mussarela', label: 'Queijo mussarela', value: 'queijomussarela' },
  { _id: uuidv4(), name: 'Frango', label: 'Frango', value: 'frango' },
  { _id: uuidv4(), name: 'Bacon', label: 'Bacon', value: 'bacon' },
  { _id: uuidv4(), name: 'Calabresa', label: 'Calabresa', value: 'calabresa' },
  { _id: uuidv4(), name: 'Catupiry', label: 'Catupiry', value: 'catupiry' },
  { _id: uuidv4(), name: 'Batata palha', label: 'Batata palha', value: 'batatapalha' },
];
export const PIZZA_FODDER = [
  { _id: uuidv4(), name: 'Chedddar', label: 'Chedddar', value: 'chedddar' },
  { _id: uuidv4(), name: 'Queijo mussarela', label: 'Queijo mussarela', value: 'queijomussarela' },
  { _id: uuidv4(), name: 'Frango', label: 'Frango', value: 'frango' },
  { _id: uuidv4(), name: 'Bacon', label: 'Bacon', value: 'bacon' },
  { _id: uuidv4(), name: 'Calabresa', label: 'Calabresa', value: 'calabresa' },
  { _id: uuidv4(), name: 'Catupiry', label: 'Catupiry', value: 'catupiry' },
  { _id: uuidv4(), name: 'Batata palha', label: 'Batata palha', value: 'batatapalha' },
];
// export const PIZZA_CREAM_COLOR = [
//   { _id: uuidv4(), name: 'Chedddar', label: 'Chedddar', value: 'chedddar' },
//   { _id: uuidv4(), name: 'Queijo mussarela', label: 'Queijo mussarela', value: 'queijomussarela' },
//   { _id: uuidv4(), name: 'Frango', label: 'Frango', value: 'frango' },
//   { _id: uuidv4(), name: 'Bacon', label: 'Bacon', value: 'bacon' },
//   { _id: uuidv4(), name: 'Calabresa', label: 'Calabresa', value: 'calabresa' },
//   { _id: uuidv4(), name: 'Catupiry', label: 'Catupiry', value: 'catupiry' },
//   { _id: uuidv4(), name: 'Batata palha', label: 'Batata palha', value: 'batatapalha' },
// ];
// export const MACARON_SHELL_COLOR = [
//   { _id: uuidv4(), name: 'Blanc', label: 'Blanc', value: 'blanc' },
//   { _id: uuidv4(), name: 'Rose', label: 'Rose', value: 'rose' },
//   { _id: uuidv4(), name: 'Bleu', label: 'Bleu', value: 'bleu' },
//   { _id: uuidv4(), name: 'Marron', label: 'Marron', value: 'marron' },
//   { _id: uuidv4(), name: 'Noir', label: 'Noir', value: 'noir' },
// ];
// export const MACARON_FODDER = [
//   { _id: uuidv4(), name: 'Vanille', label: 'Vanille', value: 'vanille' },
//   { _id: uuidv4(), name: 'Chocolat', label: 'Chocolat', value: 'nchocolatutella' },
//   { _id: uuidv4(), name: 'Chocolat Praliné', label: 'Chocolat Praliné', value: 'chocolat praliné' },
//   { _id: uuidv4(), name: 'Framboise', label: 'Framboise', value: 'framboise' },
//   { _id: uuidv4(), name: 'Coco', label: 'Coco', value: 'coco' },
//   { _id: uuidv4(), name: 'Passion', label: 'Passion', value: 'passion' },
// ];
export const PIZZA_TOPPINGS = [
  { _id: uuidv4(), name: 'Chocolate branco', label: 'Chocolate branco', value: 'chocolatebranco' },
  { _id: uuidv4(), name: 'Chocolate preto', label: 'Chocolate preto', value: 'chocolatepreto' },

  { _id: uuidv4(), name: 'Chedddar', label: 'Chedddar', value: 'chedddar' },
  { _id: uuidv4(), name: 'Queijo mussarela', label: 'Queijo mussarela', value: 'queijomussarela' },
  { _id: uuidv4(), name: 'Frango', label: 'Frango', value: 'frango' },
  { _id: uuidv4(), name: 'Bacon', label: 'Bacon', value: 'bacon' },
  { _id: uuidv4(), name: 'Calabresa', label: 'Calabresa', value: 'calabresa' },
  { _id: uuidv4(), name: 'Catupiry', label: 'Catupiry', value: 'catupiry' },
  { _id: uuidv4(), name: 'Batata palha', label: 'Batata palha', value: 'batatapalha' },
];
// export const NUMBER_LETTER_CAKE_CREAM = [
//   { _id: uuidv4(), name: 'Baunilha', label: 'Baunilha', value: 'baunilha' },
//   {
//     _id: uuidv4(),
//     name: 'Espalhar',
//     label: 'Espalhar',
//     value: 'Espalhar',
//   },
//   { _id: uuidv4(), name: 'Praliner', label: 'Praliner', value: 'praliner' },
// ];
// export const NUMBER_LETTER_CAKE_BISCUIT = [
//   { _id: uuidv4(), name: 'Baunilha', label: 'Baunilha', value: 'baunilha' },
//   { _id: uuidv4(), name: 'Chocolate', label: 'Chocolate', value: 'chocolate' },
//   { _id: uuidv4(), name: 'Amêndoa', label: 'Amêndoa', value: 'amêndoa' },
// ];
// export const NUMBER_LETTER_CAKE_TOPPINGS = [
//   {
//     _id: uuidv4(),
//     name: 'Fruits rouge',
//     label: 'Fruits rouge',
//     value: 'fruits rouge',
//   },
//   {
//     _id: uuidv4(),
//     name: 'Fruits exothique',
//     label: 'Fruits exothique',
//     value: 'fruits exothique',
//   },
//   { _id: uuidv4(), name: 'Merengues', label: 'Merengues', value: 'merengues' },
//   { _id: uuidv4(), name: 'Bonbons', label: 'Bonbons', value: 'bonbons' },
//   { _id: uuidv4(), name: 'Chocolate', label: 'Chocolate', value: 'chocolate' },
//   { _id: uuidv4(), name: 'Kinder', label: 'Kinder', value: 'kinder' },
//   { _id: uuidv4(), name: 'Oréo', label: 'Oréo', value: 'oréo' },
//   { _id: uuidv4(), name: 'Macarons', label: 'Macarons', value: 'macarons' },
// ];
// export const BROWNIE_TOPPINGS = [
//   {
//     _id: uuidv4(),
//     name: 'Espalhar',
//     label: 'Espalhar',
//     value: 'espalhar',
//   },
//   {
//     _id: uuidv4(),
//     name: 'Propagação',
//     label: 'Propagação',
//     value: 'propagação',
//   },
//   {
//     _id: uuidv4(),
//     name: 'Espalhamento',
//     label: 'Espalhamento',
//     value: 'espalhamento',
//   },
//   { _id: uuidv4(), name: 'Kinders', label: 'Kinders', value: 'kinders' },
//   {
//     _id: uuidv4(),
//     name: 'Caramelo de Manteiga Salgada',
//     label: 'Caramelo de Manteiga Salgada',
//     value: 'Caramelo de Manteiga Salgada',
//   },
//   { _id: uuidv4(), name: 'Bretzel', label: 'Bretzel', value: 'bretzel' },
//   {
//     _id: uuidv4(),
//     name: 'Chocolate Branco',
//     label: 'Chocolate Branco',
//     value: 'Chocolate Branco',
//   },
//   {
//     _id: uuidv4(),
//     name: 'Chocolate de leite',
//     label: 'Chocolate de leite',
//     value: 'Chocolate de leite',
//   },
//   {
//     _id: uuidv4(),
//     name: 'Ferrero rocher',
//     label: 'Ferrero rocher',
//     value: 'ferrero rocher',
//   },
//   { _id: uuidv4(), name: 'Speculoos', label: 'Speculoos', value: 'speculoos' },
// ];
