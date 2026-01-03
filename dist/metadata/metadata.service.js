"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataService = void 0;
const common_1 = require("@nestjs/common");
let MetadataService = class MetadataService {
    create(createMetadatumDto) {
        return 'This action adds a new metadatum';
    }
    findAll() {
        return `This action returns all metadata`;
    }
    findOne(id) {
        return `This action returns a #${id} metadatum`;
    }
    update(id, updateMetadatumDto) {
        return `This action updates a #${id} metadatum`;
    }
    remove(id) {
        return `This action removes a #${id} metadatum`;
    }
};
exports.MetadataService = MetadataService;
exports.MetadataService = MetadataService = __decorate([
    (0, common_1.Injectable)()
], MetadataService);
//# sourceMappingURL=metadata.service.js.map