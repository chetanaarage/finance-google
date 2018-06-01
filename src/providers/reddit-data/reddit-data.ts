import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RedditDataProvider Provider');
  }

  getData(){
  	 return this.http.get('/assets/data.json');
	}

 getCurrencies(){
 	return this.http.get('/assets/currencies.json');
 }

 getNews(){
 	return this.http.get('/assets/news.json');
 }
}
