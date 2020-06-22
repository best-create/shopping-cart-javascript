


var cart=[];

var Item=function(name,price,count)
{
    this.name=name
    this.price=price
    this.count=count
};

function addItemToCart(name,price,count){
    for(var i in cart){
     if(cart[i].name===name){
         cart[i].count+=count;
         return;
        }
         
        }
        var item=new Item(name,price,count);
        cart.push(item);
    }
   

addItemToCart("orange",3.99,1);
addItemToCart("apple",4.95,1);
// addItemToCart("apple",4.95,1);
addItemToCart("apple",4.95,2);
console.log(cart);


// removeItemFromCart(name)

// removeALLItem(name)

// clearCart()

// countCart()

// totalCart()

// listCart()

// SaveCart()

// loadCart()


