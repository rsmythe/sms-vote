"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const VoteSourceSchema = new mongoose.Schema({
    Name: { type: String, unique: true },
    Enabled: String,
    Choices: [{
            Id: String,
            Name: String,
            Numbers: [{ type: String, unique: true }]
        }],
    PhoneNumber: String
});
VoteSourceSchema.methods.hasVoted = function (phoneNumber) {
    const choices = this.Choices;
    return choices
        .reduce((prev, cur) => prev.concat(cur.Numbers), [])
        .find(n => n === phoneNumber) ? true : false;
};
const VoteSource = mongoose.model('VoteSource', VoteSourceSchema);
exports.default = VoteSource;
//# sourceMappingURL=VoteSource.js.map