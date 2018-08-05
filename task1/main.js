// class SpaceShip{
//     constructor(data){
//         this.name=data.name;
//         this.year=data.year;
//         this.color=data.color;
//     }
//     getNameGreet(){
//         return this.name+" hell";
//     }
//     getElemOld(){
//         return this.year + " Hels";
//     }
//     getColor(){
//         return `${this.color} is great`;
//     }
// }

// class Cutter extends SpaceShip{
//     constructor(data){
//         super(data);
//         this.model=data.model;
//         this.height=data.height;
//         this.weight=data.weight;
//     }
    // getModel(){
    //     return `${this.model} is super`;
    // }
    // getHeight(){
    //     return `${this.height} is big`;
    // }
    // getWeight(){
    //     return `${this.model} is big`;
    // }
// }

// class Frigate extends SpaceShip{
//     constructor(data){
//         super(data);
//         this.model=data.model;
//         this.height=data.height;
//         this.weight=data.weight;
//     }
//     getModel(){
//         return `${this.model} is super`;
//     }
//     getHeight(){
//         return `${this.height} is big`;
//     }
//     getWeight(){
//         return `${this.model} is big`;
//     }
// }

// class Corvette extends SpaceShip{
//     constructor(data){
//         super(data);
//         this.model=data.model;
//         this.height=data.height;
//         this.weight=data.weight;
//     }
//     getModel(){
//         return `${this.model} is super`;
//     }
//     getHeight(){
//         return `${this.height} is big`;
//     }
//     getWeight(){
//         return `${this.weight} is big`;
//     }
// }
// let space=new SpaceShip({name:"Lil",year:"1809",color:"blue"});
// let corvet=new Corvette({name:"Falcon",year:"2809",color:"red",model:'X',height:"120m",weight:"200p"});


function SpaceShip(data){
    this.name=data.name;
    this.year=data.year;
    this.color=data.color;
    this.getName=function(){
        return `${this.name} is super`;
    }
    this.getYear=function(){
        return `${this.year} is big`;
    }
    this.getColor=function(){
        return `${this.color} is big`;
    }
};
function Corvette(data){
    SpaceShip.call(this,data);
    this.model=data.model;
    this.height=data.height;
    this.weight=data.weight;

    this.getName=function(){
        return `${this.name} is big`; 
    }

    this.getYear=function(){
        return `${this.year} is big`; 
    }

    this.getColor=function(){
        return `${this.color} is big`; 
    }
}
let space=new SpaceShip({name:"Lil",year:"1809",color:"blue"});
let corvet=new Corvette({name:"Falcon",year:"2809",color:"red",model:'X',height:"120m",weight:"200p"});
console.log(space,corvet);
