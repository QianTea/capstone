# capstone - UI Development Plan
 A restaurant website that includes an admin panel, through which customers can upload and customize store name, logo, menu, price, and online order links (such as skipp/uber eat)

## Restaurant website 
- Restaurant information 
- View menu 
- Restaurant location 
- Display contact information 
- Connect online ordering website 

## Admin Panel - Management interface 
# Restaurant Management System

## Login
- [x] Admin Login
## Home
- [x] Dashboard
  - [x] Today's Revenue
  - [x] Today's Order List
## Menu
Add, Delete, Update
- [ ] Categories
  - [ ] Name
  - [ ] Description
- [ ] Products
  - [ ] Name
  - [ ] Price
  - [ ] Category
  - [ ] Description

## Website Info
Add, Delete, Update
  - [ ] Logo
  - [ ] Store Name
  - [ ] Store Description
  - [ ] Environment Pictures
  - [ ] Address (with Google Map API)
  - [ ] Contact Number (Take-out Only)
  - [ ] Business Hours (with check boxes for each day of the week)
  - [ ] Supported Takeaway Websites and Links (Skipped Dishes)

**Employee information** 
> Add, delete, update 
> - waiters login: name, password

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
