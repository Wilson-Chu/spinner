const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let i = 0;
for (const char of characters) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(`\r${char}   `);
  }, 100 + (200 * i));
  i++;
}
setTimeout(() => process.stdout.write('\n'), 100 + (200 * characters.length));