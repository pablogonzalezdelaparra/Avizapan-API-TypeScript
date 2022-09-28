import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {

  @Cron('*/10 * * * * *')
  runEvery10Seconds() {
  console.log(this.getHello());
  }
    
  getHello(): string {
    return 'Welcome! Please go to this <a href="https://avizapan-app-p6qc5.ondigitalocean.app/api">link</a> for more information!'
  }

  
}
