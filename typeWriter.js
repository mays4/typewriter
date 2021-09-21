const sentence = "hello there from lighthouse labs";
const words = sentence.split(" ");
let delay = 0;
for (let char of sentence) {
  //console.log(char);
  setTimeout(() =>{
    process.stdout.write(char + "\n");
  },delay);
  delay += 50;
}

