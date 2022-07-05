function sum(a, b) {
  /* ваш код */
   if(typeof a === 'number' && typeof === b 'number'){
    return a + b;
  }
  console.error('TypeError');
  return;
}

module.exports = sum;
