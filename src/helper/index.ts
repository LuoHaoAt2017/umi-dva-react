// const letterRegexp = /^[a-zA-Z]+$/;
// const numberRegexp = /^[0-9]+$/;

// interface StringValidator {
//   isAcceptable(param: string): boolean;
// }

// class LettersValidator implements StringValidator {
//   isAcceptable(param: string) {
//     return letterRegexp.test(param);
//   }
// }

// class ZipCodeValidator implements StringValidator {
//   isAcceptable(param: string) {
//     return param.length === 5 && numberRegexp.test(param);
//   }
// }

// let strings = ['Hello', '98052', '101'];

// let validators: { [s: string]: StringValidator } = {};

// validators['ZIP code'] = new ZipCodeValidator();
// validators['Letters only'] = new LettersValidator();

// for (let s of strings) {
//   for (let name in validators) {
//     let isMatch = validators[name].isAcceptable(s);
//     console.log(`'${s}' ${isMatch ? 'matches' : 'does not match'} '${name}'.`);
//   }
// }
