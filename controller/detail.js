window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParams = urlParams.get('productid');
    
    let promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParams}`,
        method: 'GET', 
        responseType: 'json'
        
    })
    promise.then(function(response){
        let product = response.data.content;
            console.log(product)
            
                document.querySelector('.title h2').innerHTML = product.name;
                document.querySelector('.text p').innerHTML = product.description;
                for(arrSize in product.size){
                    let sizeButton = document.querySelector(`.size button .size${arrSize}`)
                    if(sizeButton){
                        sizeButton.innerHTML = product.size[arrSize];}
                }
                
                document.querySelector(' .col-5 img').src = product.image;
                document.querySelector('.price').innerHTML = `$${product.price}`;
            
        

        })
        getDataProductAsync();
    }  
    
    
    
 