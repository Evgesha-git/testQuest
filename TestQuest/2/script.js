const line = ["red", "blue", "green", "yellow", "lime", "magenta", "black", "gold", "gray", "tomato"];



let create = {
    'randStr':()=>{
        let lineWrap = "";
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                let name = create.rand();
                let className = create.rand();
                if(name != className){
                    lineWrap += "<span class="+line[className]+"> "+line[name]+" <span>";
                }else{
                    className = create.rand();
                    lineWrap += "<span class="+line[className]+"> "+line[name]+" <span>";
                }
            }
            lineWrap += "</br>";
        }
        return lineWrap;
    },
    
    'rand':()=>{
        return Math.floor(Math.random()*Math.floor(5));
    }
}

let wrap={
    'createViuwe':`<div class="block">${create.randStr()}<div>`,

    'drawer':(view, wereId) => {
        document.getElementById(wereId).innerHTML = view;
    }
}

wrap.drawer(wrap.createViuwe, 'wrapper');


