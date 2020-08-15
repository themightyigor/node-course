import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PokemonDto {

    @ApiProperty()
    readonly id?: number;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsNumber()
    readonly damage: number;
}
