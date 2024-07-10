// utils/cardUtils.js
export const detectCardType = (number) => {
    const cardPatterns = {
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    };
  
    for (let card in cardPatterns) {
      if (cardPatterns[card].test(number)) {
        return card;
      }
    }
  
    return 'unknown';
  };
  