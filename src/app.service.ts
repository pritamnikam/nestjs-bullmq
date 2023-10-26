import { Inject, Injectable } from '@nestjs/common';
import { TRANSCODE_QUEUE } from './constants';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async transcode() {
    return await this.transcodeQueue.add({
      fileName: './file.mp3'
    });
  }
}
