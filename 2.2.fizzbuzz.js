/* name: fizzbuzz
 * coder: @calvinmasopoga
 * date: 2020.12.05 23:19
 * description: Write a program to print numbers from 1 to 100. Instead of
 * numbers, print 'fizz', 'buzz' or 'fizzbuzz' if the the number is 
 * divisible to 3, 5 or to 3 & 5 respectively.
 * source: eloquentjs/program.struct/exercise/fizzbuzz
 *
 */


let results = [];

function quotients(print='fizz', multiplier = 3, multiplicant = 1){

  let list = [];
  
  for(multiplicant; multiplier * multiplicant <= 100; multiplicant++){

    list.push(print);
  }
  
  return list;
}


results.push(quotients(), quotients('buzz', 5), quotients('fizzbuzz', 15));
console.log(results);
