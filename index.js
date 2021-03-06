/*
class Name{
    constructor(dom,dom,dom){
        this.dom=dom,
        this.dom=dom,
        


        dom.addEventListener("click",()=>{

        });
        dom.hover(function(){
            $(this).css("background-color", "yellow");
            }, function(){
            $(this).css("background-color", "pink");
          });

    }
};
*/
//import axios from axios 
let Api= 'https://crossorigin.me/https://swapi.dev/api/';
//fetch(Api).then(result=>console.log(result));
axios.get('https://crossorigin.me/https://swapi.dev/api/planets/3/').then(res=>console.log(res.data));




    

