export class Product {
    _id: string;
    name: string;
    producttype: string;
    brand: string;
    model: string;
    price: number;
    list_price: number;
    description: string;
    rating: string;
    sku: string;
    feature: [string];
    image: [string];
    images: { black: [null], white: [null], stainless: [null] };
    specifications: { dimensions: [null], details: [null] };
  }

export class Cart {
    email: string;
    items: [{ product: Product, quantity: number }]
  }

  export class Delivery {
    firstName:string = 'John';
    lastName:string = 'John';
    email:string = 'John@John.com';
    phone:string = '905 454 8989';
    shippingAddress:string = 'John';
    zipCode:string = '12345';
    cityState:string = 'Maynard, MA';
    useAsBillingAddress:boolean = true;
    deliveryDate:Date = new Date('09/28/18');
    specialInstruction:string = 'John John John John John John John John ';    
  }
  
  export class Payment {
    paymentType:string = "Credit Card";
    cardNumber:string = "JohnJohn";
    expMonth:string = "01-January";
    expYear:string = "2020";
    cw:string = "Joh";    
  }
  
  export class Order {
    constructor(public delivery:Delivery, public payment:Payment, public orderItems:OrderItem[]) {}    
  }
  
  export class OrderItem {
    constructor(public productId:string, public quantity:number) {}        
  }

  export class CartSummary {
    cart:Cart = new Cart();
    numberOfItems:number;
    subtotal:number;
    tax:number;
    discount:number;
    total:number;    
  }