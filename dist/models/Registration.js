"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.RegistrationSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    PhoneNumber: { type: String, unique: true }
});
const RegistrationModel = mongoose.model('Registration', exports.RegistrationSchema);
exports.default = RegistrationModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9SZWdpc3RyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFPeEIsUUFBQSxrQkFBa0IsR0FBb0IsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ25FLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLEtBQUssRUFBRSxNQUFNO0lBQ2IsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0NBQzlDLENBQUMsQ0FBQztBQUVILE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBdUIsY0FBYyxFQUFFLDBCQUFrQixDQUFDLENBQUM7QUFDbkcsa0JBQWUsaUJBQWlCLENBQUMiLCJmaWxlIjoibW9kZWxzL1JlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuaW1wb3J0IFJlZ2lzdHJhdGlvbkRUTyBmcm9tICcuLi8uLi8uLi9zaGFyZWQvUmVnaXN0cmF0aW9uRFRPJztcblxuZXhwb3J0IGludGVyZmFjZSBSZWdpc3RyYXRpb25Eb2N1bWVudCBleHRlbmRzIFJlZ2lzdHJhdGlvbkRUTywgbW9uZ29vc2UuRG9jdW1lbnQge1xufVxuXG5leHBvcnQgY29uc3QgUmVnaXN0cmF0aW9uU2NoZW1hOiBtb25nb29zZS5TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBGaXJzdE5hbWU6IFN0cmluZyxcbiAgICBMYXN0TmFtZTogU3RyaW5nLFxuICAgIEVtYWlsOiBTdHJpbmcsXG4gICAgUGhvbmVOdW1iZXI6IHsgdHlwZTogU3RyaW5nLCB1bmlxdWU6IHRydWUgfVxufSk7XG5cbmNvbnN0IFJlZ2lzdHJhdGlvbk1vZGVsID0gbW9uZ29vc2UubW9kZWw8UmVnaXN0cmF0aW9uRG9jdW1lbnQ+KCdSZWdpc3RyYXRpb24nLCBSZWdpc3RyYXRpb25TY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uTW9kZWw7Il19
