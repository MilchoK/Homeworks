let s = " ";
for (let i = 1; i < 21; i++) {
  if (i % 2 == 1) {
    s += i + " ";
  } else if (i % 2 == 0) {
    s += i + "\n";
    console.log(s);
    s = " ";
  }
}
