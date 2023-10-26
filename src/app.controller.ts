import { Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('transcode')
  async transcode() {
    this.logger.log('transcode');
    return await this.appService.transcode();
  }
}
