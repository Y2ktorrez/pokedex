import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

/*
 * 
 * @IsInt(): Valida que el valor sea un número entero.
 * @IsPositive(): Valida que el valor sea un número positivo.
 * @Min(1): Valida que el valor sea como mínimo 1.
 * 
 * @IsString(): Valida que el valor sea una cadena de texto.
 * @MinLength(1): Valida que la cadena tenga al menos 1 carácter.
 * 
 * Los DTO se usa para validar estos datos antes de que se procesen. Si los datos no cumplen con los requisitos 
   especificados por los decoradores de validación, el sistema devuelve un error y no permite que se procese 
   la solicitud.
 * 
 */

export class CreatePokemonDto {

    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    @IsString()
    @MinLength(1)
    name: string;

}
