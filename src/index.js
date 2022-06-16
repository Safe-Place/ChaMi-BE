const app = require("./app");

const port = process.env.PORT || 80;
app.listen(port, '0.0.0.0', () => {
  console.log(`Listening: http://localhost:${port}`);
});
