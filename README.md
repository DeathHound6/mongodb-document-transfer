# MongoDB Documents Transfer
A javascript script used to transfer documents from one db collection to another

## Using and running the script
1) Change the values of `mongo_conn1` and `mongo_conn2` inside the `.env` file (Keep both as string - values wrapped with ")
2) Change the values of both strings in server.js lines 23 and 24

=> The string inside `.db()`s brackets should be the database name, the string inside `.collection()` should be the collection name. See the `Database and Collection` hyperlink below

=> Again, both strings should remain as strings (wrapped with ")

[Database and Collection](https://cdn.glitch.com/4641af10-9c68-4dc4-b95c-80fac93ea67d%2F8A3DE75E-CE10-4DC4-96A4-BF8AF493329F.jpeg?v=1589989125357)

3) Open the console or terminal and run `node server.js` or `node .` and wait 5 seconds for a response message

If the script has succeeded, the text of `Documents have been successfully transferred` should be logged. If something has gone wrong, the error will be shown. If you cannot find what the issue is or don't know how to fix it, try following the steps in this file again