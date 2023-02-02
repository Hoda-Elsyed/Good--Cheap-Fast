const inputs = document.querySelectorAll('input')
let clicked = [];
for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener('change', ()=>{
        if(inputs[index].checked){
            clicked.push(inputs[index])
            console.log(clicked);
            if(clicked.length >= inputs.length){
                clicked.length = inputs.length-1
                if(index == 0){
                    inputs[inputs.length-1].checked = false
                }else{
                    inputs[index-1].checked = false

                }
            }
        }
    })
}