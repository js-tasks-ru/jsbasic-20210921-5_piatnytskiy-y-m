function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i += 1) {
    table.rows[i].cells[i].style.backgroundColor = "red";
    //  let row = table.rows[i];
    //  row.cells[i].style.backgroundColor = 'red';
  }
}
