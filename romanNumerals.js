function convertToRoman(num) {
    let roman = [];
    let string = num.toString();

     //make all strings = four digits
     while (string.length < 4) {
        string = '0' + string;
      }
     console.log(string)
    // code for above 1000
    if (string.length > 3) {
      for (let i = 0; i < string[0]; i++) {
        roman.push("M")
      }
      if (string[1] === '9') {
          roman.push("CM");
        }
        else if (string[1] === '4') {
          roman.push("CD");
        }
        else if (string[1] === '5') {
          roman.push("D")
        }
        else if (string[1] > 5 ) {
          roman.push("D")
          for (let i = 5; i < string[1]; i++) {
            roman.push("C")
           }
        }
        else if (string[1] < 4) {
          for (let i = 0; i < string[1]; i++) {
            roman.push("C")
          }
        }
         if (string[2] === '9') {
          roman.push("XC");
        }
        else if (string[2] === '4') {
          roman.push("XL");
        }
        else if (string[2] === '5') {
          roman.push("L")
        }
        else if (string[2] > 5 ) {
          roman.push("L")
          for (let i = 5; i < string[2]; i++) {
            roman.push("X")
           }
        }
        else if (string[2] < 4) {
          for (let i = 0; i < string[2]; i++) {
            roman.push("X")
          }
        }
        if (string[3] === '9') {
          roman.push("IX");
        }
        else if (string[3] === '4') {
          roman.push("IV");
        }
        else if (string[3] === '5') {
          roman.push("V")
        }
        else if (string[3] > 5 ) {
          roman.push("V")
          for (let i = 5; i < string[3]; i++) {
            roman.push("I")
           }
        }
        else if (string[3] < 4) {
          for (let i = 0; i < string[3]; i++) {
            roman.push("I")
          }
        }
    }
    return roman.toString().replaceAll(',', '');
   }
   
   console.log(convertToRoman(6));