
Object.prototype.numberOfProps=function(){
    return Object.keys(this).length;
}
let obj={
    name:"lalal",
    age:2,
    year:12,
    num:NaN
}

console.log(obj.numberOfProps());

Object.prototype.sumOfNumberProps=function(){
    let arr=[],
        number=null,
        result=null;
    for(let key in obj){
        number=parseInt(this[key]);
        if(!isNaN(number)){
            arr.push(number);
        }
    }
    result=arr.reduce((sum,el)=>{
        return sum+=el;
    });
    return result;
}

console.log(obj.sumOfNumberProps());

Object.prototype.objectMap=function(callback){
    let currentObj=this;
    for(let key in currentObj){
        if(currentObj.hasOwnProperty(key))
            currentObj[key]=callback(currentObj[key],currentObj);
    }
    return currentObj;
}

let aMap={
    item1: 3,
    item2: -1
  }.objectMap(function(el){
    return el+1;
});

console.log(aMap.objectMap());

Number.prototype.increment=function(inc){
    let number=this;
    if(inc==undefined){
       return ++number;
    }else{
        return number+=inc;
    }
}

 let a=1;
 console.log(a.increment());

Number.prototype.decrement=function(inc){
    let number=this;
    if(inc==undefined){
       return --number;
    }else{
        return number-=inc;
    }
}

 let b=1;
 console.log(b.decrement(5));

Number.prototype.sumOfDigits=function(){
    let strNumber=Array.from(this.toString()),
        result;
    
    // we can do it with both methods 

    // for(let i=0;i<strNumber.length;i++){
    //     result+=parseInt(strNumber[i]);
    // }
    result=strNumber.reduce((sum,el)=>{
        return sum+=parseInt(el);
    },0);
    return result;
}

 let num=479;
 console.log(num.sumOfDigits());

Array.prototype.sumOfFirstLast=function(){
    return this[0]+this[this.length-1];
}

 let arr1 = [6, 8, 11, 4, 13];
 console.log(arr1.sumOfFirstLast());

Array.prototype.innerMap=function(callback){
    let newArray=[],
        insideArr=[],
        insideDwArr=[];
    for(let i=0;i<this.length;i++){
        //debugger
        if(Array.isArray(this[i])){
            insideArr=this[i].map(el=>{
                if(Array.isArray(el)){
                    insideDwArr=el.map(el=>{
                        return callback(el);
                    })
                    return insideDwArr;
                }
                else{
                    return callback(el);
                }
                
            })
            newArray[i]=insideArr;
        }
        else{
        newArray[i]=callback(this[i],this);
    }
        
    }
    return newArray;
}

// Array.prototype.innerMap=function(callback){
//     let newArr=[];
//     function innerArr(arr,callback){
//         return arr.map(callback);
//     }
//     for(let i=0;i<this.length;i++){
//         if(Array.isArray(this[i])){
//             newArr[i]=innerArr(this[i],callback);
//             if(Array.isArray(this))
//         }
//         else{
//             newArr[i]=callback(this[i],this);
//         }
//     }
// }

let arr2 = [3, [5, 19, 18], 6, [[7, 19, 31], [14, 18, 20]], 2];

let res=arr2.innerMap((el)=>{
    return el+2;
});