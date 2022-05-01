import { EOL } from "os";

function createTimesTable(cb) {
  const timesTable = [];
  for (let i = 1; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      if (!j == 0) {
        timesTable.push(i * j);
      }
    }
  }
  console.log(timesTable)
 cb(timesTable);
}

createTimesTable(function (timesTable) {
  const formatedTable = timesTable.reduce((p, c, i) => {
    if ((i + 1) % 12 === 1) {
      return p + EOL + c;
    } else return `${p} ${c}`;
  });
  console.log(formatedTable);
});
