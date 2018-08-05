if(!Function.prototype.bind){
    Function.prototype.bind=function(context){
        var func=this;
        return function(){
            return func.call(context);
        }
    }
}

function fub(){
    return this.name;
}

var obj={
    name:"hell"
}

var hell=fub.bind(obj);

console.log(hell());
console.log(hell());
console.log(hell());
console.log(hell());
console.log(hell());
