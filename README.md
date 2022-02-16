# Front-End-Dev-Project

<p> The project aims to be the best practice for a team of 2 students. The goalis to useeverything you have learned from this course, to design and implement an interactive webfrontend that is connected to the database, as a web application.
</p><p>Your   web   application   functions   as   a restaurant point-of-transaction   system.   A   point-of-transactionsystem is a place where company manages customer transactions for products or services at  astore. E.g.,restaurantuses a point-of-transaction system to  create  a customer transactionsending orders to the kitchenwith the following requirements:<br><br><b>There are 2 user types: Customer UI, Kitchen UI</b></p>

## Customer UI 🙍‍♀️🙍‍♂️

- Customer should be able to create a new order list by 📃
   * Selecting the table number on the Homepage
   * Then, on the left pane
      * 🌮🍗🍼 Customer  can  view  list  of  foodcategories including Appetizer,  Main  dish, Drinks etc.
      * Each  food  category,  Customercan  view full list  of  food  menuunder  the categorywith priceand food information.Customer can select/removemenuto/fromthe  order  list  (interactive  adding/removing).Customer mustpress confirm button to confirm the order list to the Kitchen. Customer cantype in aspecial  request to  the  order.Customer  can navigate  to  othersfood categories.
      * Customer can search for a menuname.
   * On the right pane,
      * Customer can view list of food orderwith its status.
         * The order status can be ‘queue’, ‘cook’,‘served’or ‘cancelled’.
         * On  customer  order confirm submission,  the  order  status  will  be ‘queue’. Later ‘cook’ and ‘served’ status will be changed by the Kitchen.
         * On  customer  order confirm submission,  the  order  status  will  be ‘queue’. Later ‘cook’ and ‘served’ status will be changed by the Kitchen.
- Customer can submit the ‘Checkout’. Customer will see the summarized of order list with total price (be careful with the order status).
- Once the payment is made, the table should be clear and order list should be removed.

## Kitchen UI 🍳👨‍🍳

- Kitchen must Login to access Kitchen UI. 🖥⌨🖱
- Kitchen can see list of orders from every customer table sorted by status anddate. 📃
   * When Kitchen starts cooking the order, the order must be changed to ‘cook’.
   * When Kitchen finished cooking the order, the order must be changed to ‘served’.
- Kitchen can refresh the csutomer page to make customer see the update status.

## Deveploment 📱💻

- The website must be responsiveness for ‘tablet view’and ‘mobile view’.
- UI design concerningin target audiences.
- Use APIs for CRUD operation on database.
- Interactive website
   * When customer add/remove the selected menu to/fromthe order list.
   * User Login validation
