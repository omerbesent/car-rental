import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { CarDetailsDto } from '../models/carDetailsDto';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44392/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetailsDto>> {
    let newPath = this.apiUrl + 'cars/getallcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }

  getCarsByBrand(
    brandId: number
  ): Observable<ListResponseModel<CarDetailsDto>> {
    let newPath = this.apiUrl + 'cars/getallcardetailsbybrand?brandId='+brandId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
}
