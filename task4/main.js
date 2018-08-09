if(!Function.prototype.bind){
    Function.prototype.bind=function(context){
        var func=this,
        args = Array.prototype.slice.call(arguments,1);
        return function(){
            return func.apply(context,args.concat(Array.prototype.slice.call(arguments)));
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
