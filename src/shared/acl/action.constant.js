"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
/**
 * ACL action list
 */
var Action;
(function (Action) {
    Action["Create"] = "create";
    Action["Read"] = "read";
    Action["Update"] = "update";
    Action["Delete"] = "delete";
    Action["Manage"] = "manage";
    Action["List"] = "list";
})(Action || (exports.Action = Action = {}));
