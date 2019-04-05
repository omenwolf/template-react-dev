import * as express from "express";
var app = express();
app.get("/", function (req, res) {
    res.send("Hello, world!");
});
export default app;
//# sourceMappingURL=app.js.map