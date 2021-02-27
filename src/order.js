
function takeOrder (orderTook, deliveryOrders) {
/*  var order = {
    orderNumber: orderTook.orderNumber,
    item: orderTook.item,
    price: orderTook.price,
    orderType: orderTook.orderType,
    status: orderTook.status
  };
*/
  if(deliveryOrders.length == 3) { 
    /* do nothing */
  } else {
    deliveryOrders.push(orderTook);
  }
}

function refundOrder (orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems (deliveryOrders) {
  var list = "";
  for (var key in deliveryOrders) {
    if (list === "") {
      list = deliveryOrders[key].item;
    } else {
      list = list + ", " + deliveryOrders[key].item;
    }
  }
  return list;
}

function searchOrder (deliveryOrders, item) {
  let isPresent = false;
  for(var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item == item) {
      isPresent = true;
    }
  }
  return isPresent;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}