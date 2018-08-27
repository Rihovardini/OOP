
const form = document.forms.namedItem("fileinfo"),
  tBody = document.createElement("tbody");
let users = [],
  count = 0;
form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form),
    arrData = [];
  for (let value of data.entries()) {
    arrData.push(value);
  }
  const user = new User(arrData),
        formInputData=getDataFromForm(data);
  users.push(user);
  createRow(getDataFromForm(formInputData));
});

function createRow(value) {
  const tr = document.createElement("tr"),
    table = document.querySelector("table");
  tr.setAttribute("data-index", count);
  tBody.appendChild(tr);
  
  value.forEach(key => {
    const td = document.createElement("td");
    td.textContent = key ? key : "Not found";
    tr.appendChild(td);
  });

  createEventClick(tr);
  table.appendChild(tBody);
  count++;
}

class SuperUser {
  changeDataVisibility(tag) {
    if (this.isDataVisible == true) {
      for (let i = 1; i < tag.length; i++) {
        tag[i].style.display = "none";
      }
      this.isDataVisible = false;
    } else {
      for (let i = 1; i < tag.length; i++) {
        tag[i].style.display = "table-cell";
      }
      this.isDataVisible = true;
    }
  }
}

class User extends SuperUser {
  constructor(data) {
    super(data);
    for (let i = 0; i < data.length; i++) {
      this[data[i][0]] = data[i][1];
    }
    this.isDataVisible = true;
  }
}

function createEventClick(tag) {
  tag.addEventListener("click", function(e) {
    const index = tag.getAttribute("data-index");
    users[index].changeDataVisibility(tag.children);
  });
}

function getDataFromForm(data){
  let arr=[];
  for (let value of data.entries()) {
        arr.push(value[1]);
  }
  return arr;
}
