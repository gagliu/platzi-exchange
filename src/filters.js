import numeral from "numeral"; //Como se trata de una libreria y no de un archivo no se requiere el arroba (@)

const dollarFilter = function(value) {
  if (!value) {
    return "$ 0";
  }

  return numeral(value).format("($ 0.00a)");
};

const percentFilter = function(value) {
  if (!value) {
    return "0%";
  }

  return `${Number(value).toFixed(2)}%`;
};

export { dollarFilter, percentFilter };
