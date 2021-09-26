const app = require("./app");
const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log("[server.js] app running at http://localhost:" + PORT);
});
