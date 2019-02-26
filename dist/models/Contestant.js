"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ContestantSchema = new mongoose.Schema({
    Name: String
});
const ContestantModel = mongoose.model('Contestant', exports.ContestantSchema);
exports.default = ContestantModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9Db250ZXN0YW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBUXhCLFFBQUEsZ0JBQWdCLEdBQW9CLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNqRSxJQUFJLEVBQUUsTUFBTTtDQUNmLENBQUMsQ0FBQztBQUVILE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQXFCLFlBQVksRUFBRSx3QkFBZ0IsQ0FBQyxDQUFDO0FBQzNGLGtCQUFlLGVBQWUsQ0FBQyIsImZpbGUiOiJtb2RlbHMvQ29udGVzdGFudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuaW1wb3J0IHsgQ29udGVzdGFudERUTyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9Db250ZXN0YW50RFRPJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlc3RhbnREb2N1bWVudCBleHRlbmRzIENvbnRlc3RhbnREVE8sIG1vbmdvb3NlLkRvY3VtZW50IHtcbn1cblxuZXhwb3J0IGNvbnN0IENvbnRlc3RhbnRTY2hlbWE6IG1vbmdvb3NlLlNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIE5hbWU6IFN0cmluZ1xufSk7XG5cbmNvbnN0IENvbnRlc3RhbnRNb2RlbCA9IG1vbmdvb3NlLm1vZGVsPENvbnRlc3RhbnREb2N1bWVudD4oJ0NvbnRlc3RhbnQnLCBDb250ZXN0YW50U2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRlc3RhbnRNb2RlbDsiXX0=
