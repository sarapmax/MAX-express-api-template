"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = 3000;
app.get('/', (req, res) => res.send('22 World'));
app.listen(port, () => console.log(`Example app listening on port ${port}`));