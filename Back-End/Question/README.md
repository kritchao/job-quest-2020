## Back-end Questions

### 1. Explain First-party cookie & Third-party cookie

    First Party cookie are stored by domain you visiting and Third Party cookie is created by domains other than your visit. usually used for tracking and advertising.

### 2. Explain CAP Theorem.

    `Consistency`: has the lastest data, `Availability`: data is all readable and `Partition Tolerance`: has backup nodes. All distributed database will has only 2 of 3 (CA, CP or AP)

### 3. Considering two queries

```javascript
const searchIds = ['1', '2', '3', ...];

const query1 = await Product.find({ id: { $in: searchIds } });

const query2 = await Promise.all(searchIds.map(searchId => Product.find({ id: searchId })));
```

### Which one is faster.

    const query1 = await Product.find({ id: { $in: searchIds } });

### 4. Explain XSS / SQL Injection / Man in the Middle Attack, and how to prevent each attack type.

    XSS is to attached codes into site's vulnerability to steal data or informations - prevent by filter arival input, encode output data or use Content Security Policy, SQL Injection used to attack database by inject SQL scripts to database while inputting some information, prevent by validate input value, change stored procedures and use charactor-escaping function. MITM attack is where attacker relays between a conversation. prevent by using VPN or private network, use high security browser, seperate wifi networks or utilize security tokens.

### 5. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.

    Callback is syncronous operation but others are ascyncronous. Prevent callback hell by using either Promise or async/await, async/await always return promise but sometimes 'Promise' don't  and can't run callback after catch an error.

### 6. Explain how HTTP protocol works.

    HTTP protocal use to create communication between client and server, sending requests to server for and server responses. in case of website, client computer create web requests and send to server and then server gives back the web elements such as image or webpage to render on the client side.