import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, IsEmail } from 'class-validator';

export class ContactDto {
    @ApiProperty() @IsString()
    firstName: string;

    @ApiProperty() @IsString()
    lastName: string;

    @ApiProperty() @IsString()
    street: string;

    @ApiProperty() @IsString()
    city: string;

    @ApiProperty({ required: false })
    @IsOptional() @IsString()
    state?: string;

    @ApiProperty() @IsString()
    postalCode: string;

    @ApiProperty() @IsString()
    country: string;

    @ApiProperty() @IsEmail()
    email: string;

    @ApiProperty() @IsString()
    phone: string;

    @ApiProperty() @IsString()
    cell: string;

    @ApiProperty() @IsInt()
    age: number;

    @ApiProperty({ required: false })
    @IsOptional() @IsString()
    image?: string;
}
