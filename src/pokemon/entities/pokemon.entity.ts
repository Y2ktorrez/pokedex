import { Prop, Schema ,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

/**
 * Define un esquema de Mongoose para un documento de MongoDB que representa un Pokémon 
 * En términos simples, una "entidad" es una representación de un objeto del mundo real dentro de tu aplicación.
 * 
 * @Prop() se usa para definir propiedades del esquema
 * unique: true indica que cada valor de estas propiedades debe ser único en la colección de MongoDB.
 * index: true crea un índice en estas propiedades, lo que puede mejorar la velocidad de las consultas.
 * 
 * export const PokemonSchema = SchemaFactory.createForClass(Pokemon); Creamos el Schema
 * Tenemos que tener cuidado con importar bien las dependencias
**/

@Schema()
export class Pokemon extends Document {

    //id mongo ya lo da automaticamente
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: string;
}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon );

