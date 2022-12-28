import asyncHandler from "express-async-handler";
import Order from "../Models/OrderModel.js";

const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems,
        shippingAddress,
        paymentMethod,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice  } = req.body;
        
if(orderItems && orderItems.length === 0){
    res.status(400)
    throw new Error('No order items')
    return
}else{
    const create = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    })
    const createdOrder = await create.save();
    res.status(201).json(createdOrder);
}
   
  
    
   
  });

  const getOrderById = asyncHandler(async(req,res)=>{
    
    const id=req.params.id
    const order =await Order.findById(id).populate('user','name email')
    
     console.log(order)
      if(order){
        res.send(order)
      }
      else{
        res.status(404)
        throw new Error('Order not found')
      }
  })
  

export { addOrderItems,getOrderById};
