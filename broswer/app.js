const tbody = document.querySelector("tbody");

function createTimesTable(cb) {
  const timesTable = [];
  for (let i = 1; i <= 12; i++) {
      for (let j = 0; j <= 12; j++) {
           if (!j == 0) timesTable.push(i * j);
    }
    }
    cb(timesTable)
}
createTimesTable(function (timesTable) {
  const formatedTable = timesTable.map((e) => `<td>${e}</td>`).reduce((p,c,i) => {
    if (i % 12 === 0) {
      return `${p}</tr><tr>${c}`;
    } else return `${p}${c}`;
  });
 
  tbody.innerHTML=`<tr>${formatedTable}</tr>`;
});
