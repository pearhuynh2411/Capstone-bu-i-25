
function getDataProduct(){
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product', 
        method: 'GET',
        responseType: 'json'
    })
    promise.then(function(response){ 
        renderProduct(response.data)
        console.log(response.data)
        console.log('1')
    })
    
    promise.catch(function(err){ 
        console.log(err)
    });
}
async function getDataProductAsync(){
    try{
    let response = await axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET', 
        responseType: 'json'
    })
    console.log(response.data)
    renderProduct(response.data);
    }catch(err){
        console.log(err)
    }
}
window.renderProduct = function(products) {
    let productArray = products.content;
    for (let product of productArray) {
        let productElement = document.getElementById(product.id);
        if (productElement) {

            productElement.querySelector('h1').innerHTML = product.name;
            productElement.querySelector('h5').innerHTML = product.shortDescription;
            productElement.querySelector('img').src = product.image;
            productElement.querySelector('.col-6:last-child p').innerHTML = `$${product.price}`;
        } else {
            console.error(`Element with ID ${product.id} not found.`);
        }
    }
};
window.onload = function(e){
    //Khi nào window load tất cả xong là sẽ chạy hàm này
    getDataProductAsync();
}
