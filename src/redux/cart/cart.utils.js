export const addItemToCart = (cartItems, cartItemToAdd) => {
    // to find matching cart item
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === cartItemToAdd.id;
    });

    if(existingCartItem){
       return cartItems.map((cartItem) => {
            if(cartItem.id === cartItemToAdd.id){
                return {...cartItem, quantity: cartItem.quantity + 1};
            }else{
                return cartItem;
            }
        });
    }
    
    
  


    return [...cartItems, {...cartItemToAdd, quantity: 1}];

}


export const decreaseQuantCartItem = (cartItems, cartItemtoRemove) => {
    console.log(cartItems);
    console.log('cartitemtoremove', cartItemtoRemove);
    if(cartItemtoRemove.quantity > 1){
        return cartItems.map(cartItem => {
    console.log('cartitem', cartItem);

            if(cartItem.id === cartItemtoRemove.id){
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }else{
                return {...cartItem};
            }
        })
    }else{
       return cartItems.filter(item => item.id != cartItemtoRemove.id);
    }
    
}

