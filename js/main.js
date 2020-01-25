let num = 266219,
    result = [],
    power,
    arr = (num).toString().split('');

    for (let i = 0; i < arr.length; i++){
        result.push(parseInt(arr[i]));   
    };

    let mult = result.reduce(function (total, item) {
      return total * item;
    }, 1);

    power = (mult ** 3);

    function mat() {
      let cut = (power.toString().substring(0, 2));
      alert(cut);
    }
    mat()

console.log(power);
console.log(arr);
console.log(result);
console.log(mult);

