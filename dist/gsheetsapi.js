"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gsheetsAPI = function gsheetsAPI(sheetId) {
  try {
    var sheetsUrl = "https://spreadsheets.google.com/feeds/cells/".concat(sheetId, "/1/public/values?alt=json-in-script");
    return _axios.default.get(sheetsUrl).then(function (response) {
      return response.data;
    }).then(function (resultText) {
      var formattedText = resultText.replace('gdata.io.handleScriptLoaded(', '').slice(0, -2);
      return JSON.parse(formattedText);
    });
  } catch (err) {
    console.log("gsheetsAPI error: ".concat(err));
    return {};
  }
};

var _default = gsheetsAPI;
exports.default = _default;