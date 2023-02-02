"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGamerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const gamer_entity_1 = require("../entities/gamer.entity");
class UpdateGamerDto extends (0, mapped_types_1.PartialType)(gamer_entity_1.Gamer) {
}
exports.UpdateGamerDto = UpdateGamerDto;
//# sourceMappingURL=update-gamer.dto.js.map