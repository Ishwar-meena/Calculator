let string = "";
let value = 0;
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        value = e.target.innerHTML;
        if (value == '=') {
            
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(value == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(value == 'X'){
            string = string+"*";
            document.querySelector('input').value = string;
        }
        else if(value == 'DEL'){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else{
        // console.log(e.target)
        // value = e.target.innerHTML;
        string = string+e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
