-- Multi-Table Query Practice
-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT product.id,
    product.ProductName,
    category.CategoryName
FROM product
    JOIN category ON product.CategoryId = category.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT [order].id AS [Order ID],
    [order].OrderDate AS [Order Date],
    shipper.CompanyName AS [Shipped Via]
FROM [order]
    JOIN shipper ON [order].ShipVia = shipper.Id
WHERE [order].OrderDate BETWEEN '1900-01-01' AND '2012-08-08 23:59:59'
ORDER BY [order].OrderDate;
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT o.quantity AS Quantity,
    p.ProductName AS Name
FROM orderdetail AS o
    JOIN product AS p ON o.ProductId = p.Id
WHERE o.OrderId = '10251';
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.id AS [Order ID],
    c.CompanyName AS [Company Name],
    e.LastName AS [Last Name]
FROM [order] AS o
    JOIN Customer AS c ON o.CustomerId = c.Id
    JOIN Employee AS e ON o.EmployeeId = e.Id;