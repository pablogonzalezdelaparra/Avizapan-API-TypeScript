import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { firstValueFrom, map, max } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}


  @Cron(CronExpression.EVERY_12_HOURS)
  async runEvery24Hours() {
  //console.log(this.getHello());
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=19.4271&longitude=-99.1276&hourly=temperature_2m';
   const { data } = await firstValueFrom(this.httpService.get(url));

   let maxval: any = 0
   for (const [key, value] of Object.entries(data.hourly.temperature_2m)) {
    //console.log(key, value);
    if (value > maxval){
      maxval = value
    }
  }
  if (maxval > 23){
    let resp = {
      "title": "Hola Vale",
      "description": "¿Como estas?",
      "location": 99999,
      "duration": 12,
      "longitude": 1500,
      "latitude": 1600,
      "adminId": 1,
      "categoryId": 1
    }
    const url = 'https://avizapan-app-3s4eu.ondigitalocean.app/notifications/';

    console.log(resp)
    const { data } = await firstValueFrom(this.httpService.post(url, resp));
  }
}
    
  getHello(): string {
    return 'Welcome! Please go to this <a href="https://avizapan-app-3s4eu.ondigitalocean.app/api">link</a> for more information!'
  }

  
}
