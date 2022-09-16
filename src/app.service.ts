import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome! Please go to this <a href="https://avizapan-app-p6qc5.ondigitalocean.app/api">link</a> for more information!'
  }
}
