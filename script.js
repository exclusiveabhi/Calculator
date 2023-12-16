let string = '';          
let buttons = document.querySelectorAll('.button');  //to select all button whose classname is button
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{      //event listener here !
       if(e.target.innerHTML == '='){        
        string   = eval(string);
        document.querySelector('input').value = string;

       }
       else if(e.target.innerHTML=='AC'){
        string = "";
        document.querySelector('input').value = string;
       }
       else if(e.target.innerHTML=='DEL'){      
        
        string  = string.slice(0,-1);   //string slicing to delete one element for array
        document.querySelector('input').value = string;
       }
       else{
           console.log(e.target)
            string = string + e.target.innerHTML;             //calculaton part
            document.querySelector('input').value = string;

       }
        
    })
   
})