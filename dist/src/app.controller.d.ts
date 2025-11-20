import { ContactDto } from './contact.dto';
import { PrismaService } from './prisma.service';
export declare class AppController {
    private prisma;
    constructor(prisma: PrismaService);
    isOk(): {
        ok: boolean;
    };
    createContact(dto: ContactDto): Promise<{
        firstName: string;
        lastName: string;
        street: string;
        city: string;
        state: string | null;
        postalCode: string;
        country: string;
        email: string;
        phone: string;
        cell: string;
        age: number;
        image: string | null;
        createdAt: Date;
        id: number;
    }>;
    getAll(): Promise<{
        firstName: string;
        lastName: string;
        street: string;
        city: string;
        state: string | null;
        postalCode: string;
        country: string;
        email: string;
        phone: string;
        cell: string;
        age: number;
        image: string | null;
        createdAt: Date;
        id: number;
    }[]>;
    getContactById(id: number): Promise<{
        firstName: string;
        lastName: string;
        street: string;
        city: string;
        state: string | null;
        postalCode: string;
        country: string;
        email: string;
        phone: string;
        cell: string;
        age: number;
        image: string | null;
        createdAt: Date;
        id: number;
    }>;
    updateContact(id: number, dto: Partial<ContactDto>): Promise<{
        firstName: string;
        lastName: string;
        street: string;
        city: string;
        state: string | null;
        postalCode: string;
        country: string;
        email: string;
        phone: string;
        cell: string;
        age: number;
        image: string | null;
        createdAt: Date;
        id: number;
    }>;
    deleteContact(id: number): Promise<{
        firstName: string;
        lastName: string;
        street: string;
        city: string;
        state: string | null;
        postalCode: string;
        country: string;
        email: string;
        phone: string;
        cell: string;
        age: number;
        image: string | null;
        createdAt: Date;
        id: number;
    }>;
}
