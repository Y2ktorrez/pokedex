import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

/**
 *MongooseModule: Es un módulo proporcionado por NestJS que permite integrar Mongoose 
  (una biblioteca de modelado de datos de MongoDB). 
 * 
 *forFeature([...]): Es un método que se utiliza para definir cuáles esquemas de Mongoose 
  deben estar disponibles en el contexto del módulo específic 
 * 
 *name: Pokemon.name: Aquí Pokemon.name es el nombre del modelo. Pokemon es la clase que defines 
  en pokemon.entity.ts, y name es una propiedad estática que representa el nombre del modelo. 
  Esto se utiliza para identificar el modelo en el contexto de Mongoose.
 *schema: PokemonSchema: PokemonSchema es el esquema de Mongoose que define la estructura de los 
  documentos en la colección de MongoDB. Este esquema especifica cómo se deben almacenar los datos para 
  los Pokémon.
 *
 *Y Exportamos el MongooseModule  
**/

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  //Importacion para que se cree el schema de manera correcta
  imports: [
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      }
    ])
  ],
  exports: [
    MongooseModule
  ]
})
export class PokemonModule {}
