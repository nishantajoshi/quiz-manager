"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMetadatumDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_metadatum_dto_1 = require("./create-metadatum.dto");
class UpdateMetadatumDto extends (0, mapped_types_1.PartialType)(create_metadatum_dto_1.CreateMetadatumDto) {
}
exports.UpdateMetadatumDto = UpdateMetadatumDto;
//# sourceMappingURL=update-metadatum.dto.js.map