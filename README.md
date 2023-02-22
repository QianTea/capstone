# capstone - UI Development Plan
 A restaurant website that includes an admin panel, through which customers can upload and customize store name, logo, menu, price, and online order links (such as skipp/uber eat)

## Restaurant website 
UI: https://github.com/users/QianTea/projects/1/views/1?pane=issue&itemId=21166867
- Restaurant information 
- View menu 
- Restaurant location 
- Display contact information 
- Connect online ordering website 

## Admin Panel - Management interface 
UI: https://github.com/users/QianTea/projects/1/views/1?pane=issue&itemId=19259998
### Login
- Admin Login

### Home-Dashboard
- Today's Revenue
- Today's Order List

### Store Info
- Logo
- Store Name
- Store Description
- Address
- Contact Number 
- Supported Takeaway Websites and Links
- Business Hours

### Menu
Food Types
- Name
- Description

Categories
- Name
- Food Type 
- Description

Products
- Name
- Dine-In Price
- Take Out Price
- Category

### Staff
Role/position
- name
- description

Staff  
- name
- position/role (uncategorized/waiter/kitchen)
- login password

---
## Iteration 3
**Add these in Store Info**
> - [ ] Business Hours [need check boxes for each day of the week]
> - [ ] Environment Pictures -> website/home-gallery [if have time]
  
**Add Report Page** 
> Select, display, download
> - [ ] Day/month/product summary  
> - [ ] Query from order history: database
---
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
