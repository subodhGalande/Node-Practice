const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head></head>");
    res.write("<title>Home</title>");
    res.write("<body> <h1>hello this is the home page</h1></body>");
    res.write(
      '<body><form action="/create-user" method="POST"><input name="userinput" type="text" ></input><button type="submit">add user</button></form></body>'
    );
    res.write("</html>");
    res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head></head>");
    res.write("<title>Home</title>");
    res.write("<body><ul><li>user 1</li><li>user 2</li></ul></body>");
    res.write("</html>");
    res.end();
  }
};

module.exports = requestHandler;
