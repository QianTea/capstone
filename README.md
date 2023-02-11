# capstone - UI Development Plan
 A restaurant website that includes an admin panel, through which customers can upload and customize store name, logo, menu, price, and online order links (such as skipp/uber eat)

## Restaurant website 
- Restaurant information 
- View menu 
- Restaurant location 
- Display contact information 
- Connect online ordering website 

## Admin Panel - Management interface 
**Admin Login**

**Menu** 
> Add, delete, update 
> - Category : name, description
> - the products: name, price, category, description 

**Employee information** 
> Add, delete, update 
> - waiters login: name, password

**restaurant website** 
> Add, delete, update 
> - logo, store name, store descrption, enviroment pics
> - address (Show map: Google Map API)
> - contact number (Take-out only)
> - business hours (check boxes: Sun-Sat with time)
> - supported takeaway websites and links (skipped dishes)
 

**Report** 
> Select, display, download
> - Day/month/product summary  
> - Query from order history: database

## Ordering System
### Waiter's Interface
- **Login** system 
- **Tabs**: Take Dine-in Order, Take Take-out/Phone Order, Order History
 > **Dine-in**
 > - Table number
 > - Separate bill
 > - Send orders to the kitchen 
 > **Take-out/Phone**
 > - Customer's Name
 > - Customer's Phone Number
 > - Send orders to the kitchen 
 > **Order History**
 > - Display orders' details 
 > - Order status: un-paid, paid
- **Alert**: the order for table#/take-out name is ready!

### Kitchen's Interface
- Display Orders
- change dishes status: not start, preparing, ready for pick up
