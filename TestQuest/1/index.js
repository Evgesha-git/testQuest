class First{
    constructor(className, classMsg){
        this.className = "First";
        this.classMsg = "A";
    };

    showName(){
        alert(this.className);
    };

    showStr(){
        alert(this.classMsg);
    }
}

class Second extends First{
    constructor(className, classMsg){
        super(className);
        this.className = "Second";
        this.classMsg = "B";
    };

    showStr(){
        alert(this.classMsg);
    }
}

let first = new First();
let second = new Second();

function getClassName(){  
    first.showName();
    second.showName();
}

function getLetter(){
    first.showStr();
    second.showStr();
}

getClassName();
getLetter();