"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGameDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const game_entity_1 = require("../entities/game.entity");
class UpdateGameDto extends (0, mapped_types_1.PartialType)(game_entity_1.Game) {
}
exports.UpdateGameDto = UpdateGameDto;
//# sourceMappingURL=update-game.dto.js.map