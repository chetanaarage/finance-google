import { Component ,Injector, ViewChild, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides,Platform} from 'ionic-angular';
// import { Http ,Response} from '@angular/http';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'; 
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
/**
 * Generated class for the MarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
})
export class MarketPage  implements OnInit{

	categories=[{"name":"saghj"},{"name":"dysk"},{"name":"saghj"},{"name":"dysk"},{"name":"saghj"},{"name":"dysk"}];
	 items:Observable<Array>;
	 currencies=[];
	@ViewChild(Slides) slides: Slides;
	 // slidesPerView : number = 1;

    public showLeftButton: boolean;
    public showRightButton: boolean;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public injector: Injector,
  			  public platform:Platform,
  			  public redditService: RedditDataProvider) {}
  
  ngOnInit() {

  	

  }

  ionViewDidLoad() {
   
   this.redditService.getData().subscribe(data => {
								//console.log(data);
										this.items = data;
				});
   this.redditService.getCurrencies().subscribe(data=>{
   	this.currencies=data;
   });
     this.showLeftButton = false;
     this.showRightButton = this.categories.length > 2;
  }
  
   slideChanged() {
	    let currentIndex = this.slides.getActiveIndex();
	    this.showLeftButton = true;
	    console.log('Current index is', currentIndex);
  }

  slideNext(){

  	this.slides.slideNext();

  	if(!this.slides.slideNext()){
  		this.showRightButton =false;
  		this.showLeftButton=true;
  	}

  }

  slidePrev(){
  	this.slides.slidePrev();
  	if(!this.slides.slidePrev()){
  		this.showRightButton =true;
  		this.showLeftButton=false;
  	}

  }


}


 // if(this.platform.width() < 1200) {
 //      this.slidesPerView = 5;
 //    }
 
 //    // On a desktop, and is wider than 768px
 //    else if(this.platform.width() <768) {
 //      this.slidesPerView = 4;
 //    }
 
 //    // On a desktop, and is wider than 400px
 //    else if(this.platform.width() < 400) {
 //      this.slidesPerView = 2;
 //    }
 
 //    // On a desktop, and is wider than 319px
 //    else if(this.platform.width() < 319) {
 //      this.slidesPerView = 1;
 //    }