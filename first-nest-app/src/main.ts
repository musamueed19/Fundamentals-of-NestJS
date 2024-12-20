import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Defining Port using ENV otherwise default to 3000

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log('running at http://localhost:' + port);

  
}
bootstrap();
