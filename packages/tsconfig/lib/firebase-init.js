"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = exports.db = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
exports.admin = firebase_admin_1.default;
const firestore_1 = require("firebase-admin/firestore");
const app_1 = require("firebase-admin/app");
const app = (0, app_1.initializeApp)();
const db = (0, firestore_1.getFirestore)(app);
exports.db = db;
exports.default = firebase_admin_1.default;
//# sourceMappingURL=firebase-init.js.map