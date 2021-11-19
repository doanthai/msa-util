"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = exports.LogType = exports.CONFIG_OPTIONS = void 0;
exports.CONFIG_OPTIONS = 'CONFIG_OPTIONS';
var LogType;
(function (LogType) {
    LogType["info"] = "log";
    LogType["error"] = "error";
    LogType["warn"] = "warn";
    LogType["debug"] = "debug";
    LogType["verbose"] = "verbose";
})(LogType = exports.LogType || (exports.LogType = {}));
var Env;
(function (Env) {
    Env["local"] = "local";
    Env["development"] = "development";
    Env["staging"] = "staging";
    Env["test"] = "test";
    Env["production"] = "production";
})(Env = exports.Env || (exports.Env = {}));
//# sourceMappingURL=constants.js.map