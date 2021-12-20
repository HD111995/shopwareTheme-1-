'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const jsonOutline_1 = require("./json/jsonOutline");
function activate(context) {
    const jsonOutlineProvider = new jsonOutline_1.JsonOutlineProvider(context);
    vscode.window.createTreeView('jsonOutline', { treeDataProvider: jsonOutlineProvider, showCollapseAll: true });
    vscode.commands.registerCommand('jsonOutline.refresh', () => jsonOutlineProvider.refresh());
    vscode.commands.registerCommand('jsonOutline.refreshNode', offset => jsonOutlineProvider.refresh(offset));
    vscode.commands.registerCommand('jsonOutline.renameNode', offset => jsonOutlineProvider.rename(offset));
    vscode.commands.registerCommand('extension.openJsonSelection', range => jsonOutlineProvider.select(range));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map