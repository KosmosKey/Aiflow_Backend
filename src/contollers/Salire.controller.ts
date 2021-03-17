import { Controller, Get } from '@nestjs/common';

@Controller()
export class SalireController {
  //   constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return 'This is a test for Salire AS :). Go to http://localhost:5000/graphql to see the GraphQL API';
  }
}
