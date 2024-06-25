import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';


@Module({
  imports: [

    //Levantar un Servidor Estatico
    ServeStaticModule.forRoot({ 
      rootPath: join(__dirname,'..','public'), 
      }),
    
    //Nos conectamos a la Base de datos
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    
    PokemonModule,
    
    CommonModule 
  ],
})
export class AppModule {}
