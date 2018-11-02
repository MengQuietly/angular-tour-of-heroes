import {Injectable, OnInit} from '@angular/core';
import {HEROES} from './mock-heroes';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../message/message.service';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/internal/operators';

@Injectable()
export class HeroesService implements OnInit {
  private heroesUrl = 'api/heroes';
  list: Array<Hero> = [];
  constructor (
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  ngOnInit() {
  }
  getHeroes(): Observable<Hero[]> {
    // return of(HEROES); // 获取模拟数据
    // this.http.get(this.heroesUrl).subscribe(data => {
    //   this.list = JSON.parse(JSON.stringify(data));
    //   console.log('获取到数据：' + this.list[8].name);
    // });
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    // return HEROES.find(hero => hero.id === id);
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched`))
    );
  }
  private log(message: string) {
    this.messageService.add('HeroesService: ${message}');
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }
}
