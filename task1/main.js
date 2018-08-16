// ES 6 implementation
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
}

function Corvette(data){
    SpaceShip.call(this,data);
    this.model=data.model;
    this.classOf=data.classOf;
    this.assembly=data.assembly;

    this.classOfCorv=function(){
        return `${this.classOf} `; 
    }

    this.getAssembly=function(){
        return `${this.assembly} `; 
    }

    this.getModel=function(){
        return `${this.model}`; 
    }
}

function Frigate(data){
    SpaceShip.call(this,data);
    this.operator=data.operator;
    this.status=data.status;
    this.builder=data.builder;

    this.getOperator=function(){
        return `The operator is: ${this.operator}`; 
    }

    this.getStatus=function(){
        return `The status is:${this.status} `; 
    }

    this.getBuilder=function(){
        return `The builder is ${this.builder}`; 
    }
}

function Cutter(data){
    SpaceShip.call(this,data);
    this.price=data.price;
    this.length=data.length;
    this.speed=data.speed;
}

Cutter.prototype={

    getPrice:function(){
        return `The price is: ${this.price}`;
    },

    getLength:function(){
        return `The length is: ${this.length}`; 
    },

    getSpeed:function(){
        return `The speed is:${this.speed}`; 
    }

}
let space=new SpaceShip({name:"Lil",year:"1809",color:"blue"});
let corvet=new Corvette({name:"Falcon",year:"2809",color:"red",classOf:'X',assembly:"120m",model:"200p"});
console.log(space,corvet);
