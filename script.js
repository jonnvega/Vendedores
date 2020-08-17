document.addEventListener("DOMContentLoaded", (event) => {
  let vendedores = [];

  const resulsTable = document.createElement("table");
  resulsTable.classList.add("table");
  const columns = [
    "Nombre",
    "Turnos",
    "Transacciones",
    "Valor Total",
    "Productividad",
    "Bonus",
  ];
  const header = resulsTable.createTHead();
  const headerRow = header.insertRow(0);
  for (let index = 0; index < columns.length; index++) {
    let cell = headerRow.insertCell(index);
    cell.innerHTML = `<b>${columns[index]}</b>`;
  }

  let first = true;

  const submitFunc = () => {
    if (first) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("row");
      newDiv.appendChild(resulsTable);
      // Get the reference node
      var referenceNode = document.querySelector("#formRow");

      // Insert the new node before the reference node
      referenceNode.after(newDiv);
    }

    let nombre = document.querySelector("#nombre").value;
    let turno = document.querySelector("#turnos").value;
    let transacciones = document.querySelector("#transacciones").value;
    let valorTotal = document.querySelector("#valorTotal").value;
    let productividad = valorTotal / turno;

    let bonus = 0;
    switch (true) {
      case productividad < 30:
        bonus = 25;
        break;
      case productividad > 30 && productividad <= 80:
        bonus = 50;
        break;
      case productividad > 80 && productividad <= 200:
        bonus = 100;
        break;
      case productividad > 200:
        bonus = 200;
        break;
    }

    let vendedor = {
      nombre: nombre,
      turno: turno,
      transacciones: transacciones,
      valorTotal: valorTotal,
      productividad: productividad,
      bonus: bonus,
    };

    console.log(vendedor);

    let newRow = resulsTable.insertRow();

    let index = 0;
    for (let key of Object.keys(vendedor)) {
      let newCell = newRow.insertCell(index);
      newCell.innerHTML = vendedor[key];
      index++;
    }
    first = false;
  };

  document.querySelector("#btnInsertar").addEventListener("click", submitFunc);
});
