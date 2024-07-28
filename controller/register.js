import { content } from "../js/content.js";
document.querySelector('.submit').onclick = function(e){
    e.preventDefault();
    let dk = new content();
    let arrInput = document.querySelectorAll('.col-5 .form')
    console.log(arrInput);
    for (let input of arrInput) {
        if(input.id === 'gender'){
            dk[input.id] = input.checked && input.value === 'male';
        }else{
            dk[input.id] = input.value;
        }
        
    }
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data:dk
        
    })
    promise.then(function(response){
        console.log(response.data)
    })
    
}