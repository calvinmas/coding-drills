/* name: chessboard 
 * coder: @calvinmasopoga
 * date: 2020.12.05 23:59
 * Description: Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 * source: eloquentjs/program.struct/exercise/chessboard
 *
 */


let output = " # # # #";

for(let x = 0; x < 8; x++){

  console.log(output);
  output = output.split("").reverse().join('');
}
