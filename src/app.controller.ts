import {
    Body,
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    ParseIntPipe,
    NotFoundException,
} from '@nestjs/common';
import { ContactDto } from './contact.dto';
import { PrismaService } from './prisma.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller('app')
export class AppController {
    constructor(private prisma: PrismaService) { }

    @Post('contacts/new')
    async createContact(@Body() dto: ContactDto) {
        return await this.prisma.contact.create({
            data: {
                ...dto,
                createdAt: new Date(),
            },
        });
    }

    @Get('contacts')
    async getAll() {
        return await this.prisma.contact.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    @Get('contacts/:id')
    async getContactById(@Param('id', ParseIntPipe) id: number) {
        const contact = await this.prisma.contact.findUnique({ where: { id } });

        if (!contact) {
            throw new NotFoundException(`Contact with id ${id} not found`);
        }

        return contact;
    }

    @Put('contacts/:id')
    async updateContact(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: Partial<ContactDto>,
    ) {
        const contact = await this.prisma.contact.findUnique({ where: { id } });

        if (!contact) {
            throw new NotFoundException(`Contact with id ${id} not found`);
        }

        return await this.prisma.contact.update({
            where: { id },
            data: { ...dto },
        });
    }

    @Delete('contacts/:id')
    async deleteContact(@Param('id', ParseIntPipe) id: number) {
        const contact = await this.prisma.contact.findUnique({ where: { id } });

        if (!contact) {
            throw new NotFoundException(`Contact with id ${id} not found`);
        }

        return await this.prisma.contact.delete({
            where: { id },
        });
    }
}
