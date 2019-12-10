function postData(url = ``, cartItems = {}) {
    return fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItems),
    }).then(function (response) {
        redirectToCart();
    });
}

function redirectToCart() {
    window.location = "/cart.php";
}

export default function () {
    $(document.body).on('click', '#button-add-three', () => {
        let cartID = "{{cart_id}}"
        let url = `/api/storefront/cart`;
        let lineItems = {
            "lineItems": [
                {
                    "quantity": 1,
                    "productId": 103
                },
                {
                    "quantity": 1,
                    "productId": 86
                },
                {
                    "quantity": 1,
                    "productId": 77,
                    "variantId": 7
                }
            ]
        };
        
    
        
        postData(url, lineItems)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
    });
}
