import { TransformService } from './types/transform-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseDTO } from './types/response-dto';
import { Response } from './types/response';
import { map } from 'rxjs';

export abstract class BaseApiService<D, T extends D>
  implements TransformService<D, T>
{
  abstract readonly url: string;
  abstract transform(dto: D): T;

  constructor(protected httpClient: HttpClient) {}

  getList(page = 1) {
    const params = new HttpParams({
      fromObject: {
        page,
      },
    });

    return this.httpClient
      .get<ResponseDTO<D>>(this.url, {
        params,
      })
      .pipe(
        map((response): Response<D, T> => {
          return {
            ...response,
            results: response.results.map((dto) => this.transform(dto)),
          };
        })
      );
  }

  getById(id: string) {
    return this.httpClient
      .get<D>(`${this.url}${id}`)
      .pipe(map((dto) => this.transform(dto)));
  }
}
