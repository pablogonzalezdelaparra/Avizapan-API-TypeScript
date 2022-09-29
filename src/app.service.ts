import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { firstValueFrom, map, max } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}

  @Cron('*/* * 24 * * *')
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
      "title": "Ola de Calor",
      "description": "Que calor",
      "location": 64892,
      "duration": 64821,
      "adminId": 1,
      "categoryId": 1
    }
    const url = 'http://localhost:4000/notifications/';

    console.log(resp)
    const { data } = await firstValueFrom(this.httpService.post(url, resp));
  }
}
    
  getHello(): string {
    return 'Welcome! Please go to this <a href="https://avizapan-app-p6qc5.ondigitalocean.app/api">link</a> for more information!'
  }

  
}
