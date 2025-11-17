"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    setupSwagger(app);
    app.enableCors({
        origin: [true],
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['*'],
        optionsSuccessStatus: 204,
        credentials: true,
        preflightContinue: false,
    });
    await app.listen(process.env.PORT ?? 3000);
}
function setupSwagger(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('AllCloudContacts API')
        .setDescription('API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
}
bootstrap();
//# sourceMappingURL=main.js.map