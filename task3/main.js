
let form  = document.forms.namedItem("fileinfo"),
    users=[],
    count=0,
    tBody=document.createElement('tbody');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let data = new FormData(form),
        arrData=[];
    for (let value of data.entries()) { 
        arrData.push(value);
    }
     let user= new User(arrData);
     users.push(user);
    
    createRow(user);
});

function createRow(value){
    const tr=document.createElement('tr'),
          table=document.querySelector('table');
          tr.setAttribute('data-index',count);
          tBody.appendChild(tr);
          for(let key in value){
              const td=document.createElement('td');
              td.textContent=value[key]?value[key]:"Not found";
              tr.appendChild(td);
          }
          createEventClick(tr);
          table.appendChild(tBody);
          count++;
}
class SuperUser{
        changeDataVisibility(isDataVisible,tag){
        
            if(!isDataVisible){
                for(let i=1;i<tag.length;i++){
                    tag[i].style.display='none';
                }
            }
        }
       
    }


class User extends SuperUser{
    constructor(data){
        super(data)
        for(let i=0;i<data.length;i++){
            this[data[i][0]]=data[i][1];
        }
    }
}

function createEventClick(tag){
    tag.addEventListener('click',function(e){
        let index=tag.getAttribute("data-index");
        users[index].changeDataVisibility(false,tag.children);
    })
}

