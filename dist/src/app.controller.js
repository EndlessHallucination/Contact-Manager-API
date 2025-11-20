"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const contact_dto_1 = require("./contact.dto");
const prisma_service_1 = require("./prisma.service");
const swagger_1 = require("@nestjs/swagger");
let AppController = class AppController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    isOk() {
        return { ok: true };
    }
    async createContact(dto) {
        return await this.prisma.contact.create({
            data: {
                ...dto,
                createdAt: new Date(),
            },
        });
    }
    async getAll() {
        return await this.prisma.contact.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async getContactById(id) {
        const contact = await this.prisma.contact.findUnique({ where: { id } });
        if (!contact) {
            throw new common_1.NotFoundException(`Contact with id ${id} not found`);
        }
        return contact;
    }
    async updateContact(id, dto) {
        const contact = await this.prisma.contact.findUnique({ where: { id } });
        if (!contact) {
            throw new common_1.NotFoundException(`Contact with id ${id} not found`);
        }
        return await this.prisma.contact.update({
            where: { id },
            data: { ...dto },
        });
    }
    async deleteContact(id) {
        const contact = await this.prisma.contact.findUnique({ where: { id } });
        if (!contact) {
            throw new common_1.NotFoundException(`Contact with id ${id} not found`);
        }
        return await this.prisma.contact.delete({
            where: { id },
        });
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('is-ok'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "isOk", null);
__decorate([
    (0, common_1.Post)('contacts/new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_dto_1.ContactDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createContact", null);
__decorate([
    (0, common_1.Get)('contacts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('contacts/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getContactById", null);
__decorate([
    (0, common_1.Put)('contacts/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateContact", null);
__decorate([
    (0, common_1.Delete)('contacts/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteContact", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('App'),
    (0, common_1.Controller)('app'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppController);
//# sourceMappingURL=app.controller.js.map