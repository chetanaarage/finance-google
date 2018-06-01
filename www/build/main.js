webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedditDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RedditDataProvider = /** @class */ (function () {
    function RedditDataProvider(http) {
        this.http = http;
        console.log('Hello RedditDataProvider Provider');
    }
    RedditDataProvider.prototype.getData = function () {
        return this.http.get('/assets/data.json');
    };
    RedditDataProvider.prototype.getCurrencies = function () {
        return this.http.get('/assets/currencies.json');
    };
    RedditDataProvider.prototype.getNews = function () {
        return this.http.get('/assets/news.json');
    };
    RedditDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RedditDataProvider);
    return RedditDataProvider;
}());

//# sourceMappingURL=reddit-data.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 292;

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reddit_data_reddit_data__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {MarketPage} from '../market/market';
// import {StocksPage} from '../stocks/stocks';
// import {WorldMarketPage} from '../world-market/world-market';
// import {LocalMarketPage} from '../local-market/local-market';


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, redditService) {
        this.navCtrl = navCtrl;
        this.redditService = redditService;
        this.items = [];
        this.currencies = [];
        this.news = [];
        this.market = false;
        this.stocks = false;
        this.localMarket = false;
        this.worldMarket = false;
    }
    Object.defineProperty(HomePage.prototype, "lineCanvas", {
        set: function (elRef) {
            this.lineCanvasRef = elRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "lineCanvaslocal", {
        set: function (elRef) {
            this.lineCanvaslocalRef = elRef;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.market = true;
        this.redditService.getData().subscribe(function (data) {
            _this.items = data;
        });
        this.redditService.getCurrencies().subscribe(function (data) {
            _this.currencies = data;
        });
    };
    HomePage.prototype.marketSummary = function () {
        this.market = true;
        this.stocks = false;
        this.localMarket = false;
        this.worldMarket = false;
        // this.navCtrl.push(MarketPage);
    };
    HomePage.prototype.yourstocks = function () {
        var _this = this;
        this.redditService.getNews().subscribe(function (data) {
            _this.news = data;
        });
        this.stocks = true;
        this.market = false;
        this.localMarket = false;
        this.worldMarket = false;
        //this.navCtrl.push(StocksPage);
    };
    HomePage.prototype.localMarkets = function () {
        var _this = this;
        this.market = false;
        this.stocks = false;
        this.localMarket = true;
        this.worldMarket = false;
        setTimeout(function () {
            _this.lineCharts = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.lineCanvaslocalRef.nativeElement, {
                type: 'line',
                data: {
                    labels: ["4th May", "11th May", "18th May", "25th May", "31th May"],
                    datasets: [
                        {
                            label: "My First dataset",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [-2.00, 0.00, 2.00, 4.00],
                            spanGaps: false,
                        }
                    ]
                }
            });
        });
        //this.navCtrl.push(LocalMarketPage);
    };
    HomePage.prototype.worldMarkets = function () {
        var _this = this;
        this.worldMarket = true;
        //console.log(this.lineCanvas);
        this.market = false;
        this.stocks = false;
        this.localMarket = false;
        console.log(this.lineCanvasRef);
        setTimeout(function () {
            console.log(_this.lineCanvasRef);
            _this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.lineCanvasRef.nativeElement, {
                type: 'line',
                data: {
                    labels: ["4th May", "11th May", "18th May", "25th May", "31th May"],
                    datasets: [
                        {
                            label: "My First dataset",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [65, 59, 80, 81, 56, 55, 40],
                            spanGaps: false,
                        }
                    ]
                }
            });
        });
        // if(this.worldMarket){
        //   
        // }
        //this.navCtrl.push(WorldMarketPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], HomePage.prototype, "lineCanvas", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineCanvaslocal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], HomePage.prototype, "lineCanvaslocal", null);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/vagrant/projects/finance-google/src/pages/home/home.html"*/'\n<ion-header>\n  <ion-toolbar>\n    \n    <ion-searchbar color=\'primary\' value="Finance" (input)="onSearchInput()"> \n\n  </ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'onCancel()\'>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<ion-list>\n  <ion-slides slidesPerView="2">\n  <ion-slide>\n      <ion-item tappable (click)="marketSummary()">Market Summary</ion-item>\n  </ion-slide>\n   <ion-slide>\n      <ion-item tappable (click)="yourstocks()">Your Stocks</ion-item>\n  </ion-slide>\n\n  <ion-slide>\n      <ion-item tappable (click)="localMarkets()">Local Markets</ion-item>\n  </ion-slide>\n  <ion-slide>\n      <ion-item tappable (click)="worldMarkets()">World Marekts</ion-item>\n  </ion-slide>\n  </ion-slides>\n</ion-list>\n\n\n<!-- Market Summary Page content -->\n\n<div *ngIf="market">\n<h4>You may be interested in</h4>\n<ion-row class="layout">\n      <ion-slides slidesPerView="2">\n        \n        <ion-slide *ngFor="let item of items">\n        <ion-card>\n            <ion-list>\n            <ion-item>\n              <h3>{{item.company}}</h3>\n              <p>{{item.title}}</p>\n              <br/>\n              <div>\n                {{item.stockprice}}\n                <span class="price">\n              {{item.stockpercent}}\n              <ion-icon name="arrow-round-up"></ion-icon>\n            </span>\n            </div>\n                <br/>\n            </ion-item>\n            \n            </ion-list>\n            <ion-list>\n            <ion-card-content>\n              <h3><a href=""><b><ion-icon name="add"></ion-icon>FOLLOW</b></a></h3>\n            </ion-card-content>\n          </ion-list>\n        </ion-card>\n        </ion-slide>   \n\n      </ion-slides>\n</ion-row>\n \n<h2>Top Stories</h2>\n\n<ion-card>\n<ion-row>\n  <ion-slides>\n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/ban.png"/>\n    <ion-card-content>\n      <a href="">\n        Q4 report card: Losses in banking sector tower over \n        4 times its profits so far; PNB and SBI hit the most\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/cityjobs.jpeg"/>\n    <ion-card-content>\n      <a href="">\n        City jobs under threat as Deutsche Bank swings axe\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/uniform.jpg"/>\n    <ion-card-content>\n      <a href="">\n        Uniform 12 pc road tax to make cars cheaper in Mumbai but dearer in Delhi\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/paytm.jpg"/>\n    <ion-card-content>\n      <a href="">\n        Paytm acquires Alibaba-backed TicketNew for around $40 million\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  </ion-slides>\n</ion-row>\n</ion-card>\n\n<h2>Local Market News</h2>\n<ion-card>\n<ion-row>\n  <ion-slides>\n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/paytm.jpg"/>\n    <ion-card-content>\n      <a href="">\n        Paytm acquires Alibaba-backed TicketNew for around $40 million\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/ban.png"/>\n    <ion-card-content>\n      <a href="">\n        Q4 report card: Losses in banking sector tower over \n        4 times its profits so far; PNB and SBI hit the most\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/cityjobs.jpeg"/>\n    <ion-card-content>\n      <a href="">\n        City jobs under threat as Deutsche Bank swings axe\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/uniform.jpg"/>\n    <ion-card-content>\n      <a href="">\n        Uniform 12 pc road tax to make cars cheaper in Mumbai but dearer in Delhi\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  \n  </ion-slides>\n</ion-row>\n</ion-card>\n\n<h2>World market news</h2>\n\n<ion-card>\n<ion-row>\n  <ion-slides>\n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/uniform.jpg"/>\n    <ion-card-content>\n      <a href="">\n        Uniform 12 pc road tax to make cars cheaper in Mumbai but dearer in Delhi\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  \n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/ban.png"/>\n    <ion-card-content>\n      <a href="">\n        Q4 report card: Losses in banking sector tower over \n        4 times its profits so far; PNB and SBI hit the most\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/paytm.jpg"/>\n    <ion-card-content>\n      <a href="">\n        Paytm acquires Alibaba-backed TicketNew for around $40 million\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/cityjobs.jpeg"/>\n    <ion-card-content>\n      <a href="">\n        City jobs under threat as Deutsche Bank swings axe\n      </a>\n    </ion-card-content>\n  </ion-card>\n  </ion-slide>\n  \n  </ion-slides>\n</ion-row>\n</ion-card>\n \n<h2>United States markets</h2>\n\n<ion-row class="divider">\n  <ion-card>\n    <ion-list *ngFor="let item of items">\n\n      <ion-item >\n        <div>\n        <a href="">{{item.company}}</a>\n        <span class="price">{{item.stockprice}}</span>\n        </div>\n        <div>\n        <ion-note>{{item.title}}</ion-note>\n        <span class="up">\n        <ion-icon name="add"></ion-icon>\n          {{item.stockpercent}}\n        <ion-icon name="arrow-round-up"></ion-icon>\n          </span>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-row>\n\n<h2>World markets</h2>\n<ion-row class="divider">\n  <ion-card>\n    <ion-list *ngFor="let item of items">\n\n      <ion-item >\n        <div>\n        <a href="">{{item.company}}</a>\n        <span class="price">{{item.stockprice}}</span>\n        </div>\n        <div>\n        <ion-note>{{item.title}}</ion-note>\n        <span class="down">\n        <ion-icon name="remove"></ion-icon>\n          {{item.stockpercent}}\n        <ion-icon name="arrow-round-down"></ion-icon></span>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-row>\n\n<h2>Currencies</h2>  \n<ion-row class="divider">\n  <ion-card>\n    <ion-list *ngFor="let item of currencies">\n\n      <ion-item >\n        <div>\n        <a href="">{{item.currency}}</a>\n        <span class="price">{{item.value}}</span>\n        </div>\n        <div>\n        <ion-note>{{item.time}}</ion-note>\n        <span class="up">{{item.percent}}\n        <ion-icon name="arrow-round-up"></ion-icon></span>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-row> \n</div>    \n   \n<!-- Your Stocks Page content -->\n<div *ngIf="stocks">\n  <h4>Your stocks</h4>\n  <ion-card>\n  <ion-card-content>\n  You\'re not currently following any stocks. You can follow your favourite stocks for quick access and stay updated with the latest financial news.\n  </ion-card-content>\n  </ion-card>\n\n<h4>You may be interested in</h4>\n<ion-row class="layout">\n      <ion-slides slidesPerView="2">\n        \n        <ion-slide *ngFor="let item of items">\n        <ion-card>\n            <ion-list>\n            <ion-item>\n              <h3>{{item.company}}</h3>\n              <p>{{item.title}}</p>\n              <br/>\n              <div>\n                {{item.stockprice}}\n                <span class="price">\n              {{item.stockpercent}}\n              <ion-icon name="arrow-round-up"></ion-icon>\n            </span>\n            </div>\n                <br/>\n            </ion-item>\n            \n            </ion-list>\n            <ion-list>\n            <ion-card-content>\n              <h3><a href=""><b><ion-icon name="add"></ion-icon>FOLLOW</b></a></h3>\n            </ion-card-content>\n          </ion-list>\n        </ion-card>\n        </ion-slide>   \n\n      </ion-slides>\n</ion-row>\n \n<h2>Top Stories</h2>\n\n<ion-row class="divider">\n  <ion-card>\n    <ion-list *ngFor="let item of news">\n\n      <ion-item >\n        <div>\n        <p><a href="">{{item.header}}</a></p>\n        <span class="image"><img src={{item.img}}></span>\n        <p>15mins ago</p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-row> \n</div>\n\n\n<!-- Local Markets Page content -->\n\n<div *ngIf="localMarket">\n\n<ion-row class="divider">\n  <ion-card>\n    <ion-list>\n    <ion-item>\n      <div> \n        <span class="title">.DJI </span>\n        <span class="center">24,715.09</span>\n        <span class="up">  -0.15% <ion-icon name="arrow-round-up"></ion-icon></span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <div> \n        <span class="title">.DAX </span>\n        <span class="center">13,077.72</span>\n        <span class="up">  3.25% <ion-icon name="arrow-round-up"></ion-icon></span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <div> \n        <span class="title">SENSEX</span>\n        <span class="center">34,848.30</span>\n        <span class="up">  -0.29% <ion-icon name="arrow-round-up"></ion-icon></span>\n      </div>\n    </ion-item>\n    </ion-list>\n      <ion-card-content>\n        <canvas #lineCanvaslocal></canvas>\n      </ion-card-content>\n  </ion-card>\n</ion-row>\n  \n  <h2>Local market news</h2>\n\n<ion-row class="divider">\n  <ion-card>\n    <ion-list *ngFor="let item of news">\n\n      <ion-item >\n        <div>\n        <p><a href="">{{item.header}}</a></p>\n        <span class="image"><img src={{item.img}}></span>\n        <p>15mins ago</p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-row> \n\n <h2>United States markets</h2>\n\n<ion-row class="divider">\n  <ion-card>\n    <ion-list *ngFor="let item of items">\n\n      <ion-item >\n        <div>\n        <a href="">{{item.company}}</a>\n        <span class="price">{{item.stockprice}}</span>\n        </div>\n        <div>\n        <ion-note>{{item.title}}</ion-note>\n        <span class="up">\n        <ion-icon name="add"></ion-icon>\n          {{item.stockpercent}}\n        <ion-icon name="arrow-round-up"></ion-icon>\n          </span>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-row>\n\n\n</div>\n<!-- World Markets Page content -->\n<div *ngIf="worldMarket">\n\n<ion-row class="divider">\n  <ion-card>\n    <ion-list>\n    <ion-item>\n      <div> \n        <span class="title">.DJI </span>\n        <span class="center">24,715.09</span>\n        <span class="up">  -0.15% <ion-icon name="arrow-round-up"></ion-icon></span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <div> \n        <span class="title">.DAX </span>\n        <span class="center">13,077.72</span>\n        <span class="up">  3.25% <ion-icon name="arrow-round-up"></ion-icon></span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <div> \n        <span class="title">SENSEX</span>\n        <span class="center">34,848.30</span>\n        <span class="up">  -0.29% <ion-icon name="arrow-round-up"></ion-icon></span>\n      </div>\n    </ion-item>\n    </ion-list>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n  </ion-card>\n</ion-row>\n\n<h2>World market news</h2>\n\n<ion-row class="divider">\n  <ion-card>\n    <ion-list *ngFor="let item of news">\n\n      <ion-item >\n        <div>\n        <p><a href="">{{item.header}}</a></p>\n        <span class="image"><img src={{item.img}}></span>\n        <p>15mins ago</p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-row> \n\n <h2>World markets</h2>\n\n<ion-row class="divider">\n  <ion-card>\n    <ion-list *ngFor="let item of items">\n\n      <ion-item >\n        <div>\n        <a href="">{{item.company}}</a>\n        <span class="price">{{item.stockprice}}</span>\n        </div>\n        <div>\n        <ion-note>{{item.title}}</ion-note>\n        <span class="up">\n        <ion-icon name="add"></ion-icon>\n          {{item.stockpercent}}\n        <ion-icon name="arrow-round-up"></ion-icon>\n          </span>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-row>\n</div>\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/home/vagrant/projects/finance-google/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_reddit_data_reddit_data__["a" /* RedditDataProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_market_market__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_stocks_stocks__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_local_market_local_market__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_world_market_world_market__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_reddit_data_reddit_data__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// const routes: Routes = [
//   { path: 'market', component: MarketSummary },
//   { path: 'stocks', component: StocksPage },
//   { path: '', redirectTo: '/market', pathMatch: 'full'}
// ];
// const routes: Routes = [
//   { path: 'market', component: MarketPage },
//   { path: 'home', component: HomePage },
//   { path: 'stocks', component: StocksPage },
//   { path: '', redirectTo: 'home', pathMatch: 'full'}
// ];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_stocks_stocks__["a" /* StocksPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_local_market_local_market__["a" /* LocalMarketPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_world_market_world_market__["a" /* WorldMarketPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], name: 'Home', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_market_market__["a" /* MarketPage */], name: 'Market', segment: 'market', defaultHistory: [__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]] },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_stocks_stocks__["a" /* StocksPage */], name: 'Stocks', segment: 'stocks', defaultHistory: [__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]] },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_local_market_local_market__["a" /* LocalMarketPage */], name: 'LocalMarket', segment: 'local-market', defaultHistory: [__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]] },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_world_market_world_market__["a" /* WorldMarketPage */], name: 'WorldMarket', segment: 'world-market', defaultHistory: [__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]] },
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_stocks_stocks__["a" /* StocksPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_local_market_local_market__["a" /* LocalMarketPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_world_market_world_market__["a" /* WorldMarketPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_reddit_data_reddit_data__["a" /* RedditDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

// , {}, {
//      links: [
//       { component: HomePage, name: 'Home', segment: 'home' },
//        // { component: DetailPage, name: 'Detail', segment: 'detail/:userId', defaultHistory: [HomePage] }
//     ]
//   }
// ,
//     RouterModule.forRoot(routes) 
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 129,
	"./af.js": 129,
	"./ar": 130,
	"./ar-dz": 131,
	"./ar-dz.js": 131,
	"./ar-kw": 132,
	"./ar-kw.js": 132,
	"./ar-ly": 133,
	"./ar-ly.js": 133,
	"./ar-ma": 134,
	"./ar-ma.js": 134,
	"./ar-sa": 135,
	"./ar-sa.js": 135,
	"./ar-tn": 136,
	"./ar-tn.js": 136,
	"./ar.js": 130,
	"./az": 137,
	"./az.js": 137,
	"./be": 138,
	"./be.js": 138,
	"./bg": 139,
	"./bg.js": 139,
	"./bm": 140,
	"./bm.js": 140,
	"./bn": 141,
	"./bn.js": 141,
	"./bo": 142,
	"./bo.js": 142,
	"./br": 143,
	"./br.js": 143,
	"./bs": 144,
	"./bs.js": 144,
	"./ca": 145,
	"./ca.js": 145,
	"./cs": 146,
	"./cs.js": 146,
	"./cv": 147,
	"./cv.js": 147,
	"./cy": 148,
	"./cy.js": 148,
	"./da": 149,
	"./da.js": 149,
	"./de": 150,
	"./de-at": 151,
	"./de-at.js": 151,
	"./de-ch": 152,
	"./de-ch.js": 152,
	"./de.js": 150,
	"./dv": 153,
	"./dv.js": 153,
	"./el": 154,
	"./el.js": 154,
	"./en-au": 155,
	"./en-au.js": 155,
	"./en-ca": 156,
	"./en-ca.js": 156,
	"./en-gb": 157,
	"./en-gb.js": 157,
	"./en-ie": 158,
	"./en-ie.js": 158,
	"./en-il": 159,
	"./en-il.js": 159,
	"./en-nz": 160,
	"./en-nz.js": 160,
	"./eo": 161,
	"./eo.js": 161,
	"./es": 162,
	"./es-do": 163,
	"./es-do.js": 163,
	"./es-us": 164,
	"./es-us.js": 164,
	"./es.js": 162,
	"./et": 165,
	"./et.js": 165,
	"./eu": 166,
	"./eu.js": 166,
	"./fa": 167,
	"./fa.js": 167,
	"./fi": 168,
	"./fi.js": 168,
	"./fo": 169,
	"./fo.js": 169,
	"./fr": 170,
	"./fr-ca": 171,
	"./fr-ca.js": 171,
	"./fr-ch": 172,
	"./fr-ch.js": 172,
	"./fr.js": 170,
	"./fy": 173,
	"./fy.js": 173,
	"./gd": 174,
	"./gd.js": 174,
	"./gl": 175,
	"./gl.js": 175,
	"./gom-latn": 176,
	"./gom-latn.js": 176,
	"./gu": 177,
	"./gu.js": 177,
	"./he": 178,
	"./he.js": 178,
	"./hi": 179,
	"./hi.js": 179,
	"./hr": 180,
	"./hr.js": 180,
	"./hu": 181,
	"./hu.js": 181,
	"./hy-am": 182,
	"./hy-am.js": 182,
	"./id": 183,
	"./id.js": 183,
	"./is": 184,
	"./is.js": 184,
	"./it": 185,
	"./it.js": 185,
	"./ja": 186,
	"./ja.js": 186,
	"./jv": 187,
	"./jv.js": 187,
	"./ka": 188,
	"./ka.js": 188,
	"./kk": 189,
	"./kk.js": 189,
	"./km": 190,
	"./km.js": 190,
	"./kn": 191,
	"./kn.js": 191,
	"./ko": 192,
	"./ko.js": 192,
	"./ky": 193,
	"./ky.js": 193,
	"./lb": 194,
	"./lb.js": 194,
	"./lo": 195,
	"./lo.js": 195,
	"./lt": 196,
	"./lt.js": 196,
	"./lv": 197,
	"./lv.js": 197,
	"./me": 198,
	"./me.js": 198,
	"./mi": 199,
	"./mi.js": 199,
	"./mk": 200,
	"./mk.js": 200,
	"./ml": 201,
	"./ml.js": 201,
	"./mn": 202,
	"./mn.js": 202,
	"./mr": 203,
	"./mr.js": 203,
	"./ms": 204,
	"./ms-my": 205,
	"./ms-my.js": 205,
	"./ms.js": 204,
	"./mt": 206,
	"./mt.js": 206,
	"./my": 207,
	"./my.js": 207,
	"./nb": 208,
	"./nb.js": 208,
	"./ne": 209,
	"./ne.js": 209,
	"./nl": 210,
	"./nl-be": 211,
	"./nl-be.js": 211,
	"./nl.js": 210,
	"./nn": 212,
	"./nn.js": 212,
	"./pa-in": 213,
	"./pa-in.js": 213,
	"./pl": 214,
	"./pl.js": 214,
	"./pt": 215,
	"./pt-br": 216,
	"./pt-br.js": 216,
	"./pt.js": 215,
	"./ro": 217,
	"./ro.js": 217,
	"./ru": 218,
	"./ru.js": 218,
	"./sd": 219,
	"./sd.js": 219,
	"./se": 220,
	"./se.js": 220,
	"./si": 221,
	"./si.js": 221,
	"./sk": 222,
	"./sk.js": 222,
	"./sl": 223,
	"./sl.js": 223,
	"./sq": 224,
	"./sq.js": 224,
	"./sr": 225,
	"./sr-cyrl": 226,
	"./sr-cyrl.js": 226,
	"./sr.js": 225,
	"./ss": 227,
	"./ss.js": 227,
	"./sv": 228,
	"./sv.js": 228,
	"./sw": 229,
	"./sw.js": 229,
	"./ta": 230,
	"./ta.js": 230,
	"./te": 231,
	"./te.js": 231,
	"./tet": 232,
	"./tet.js": 232,
	"./tg": 233,
	"./tg.js": 233,
	"./th": 234,
	"./th.js": 234,
	"./tl-ph": 235,
	"./tl-ph.js": 235,
	"./tlh": 236,
	"./tlh.js": 236,
	"./tr": 237,
	"./tr.js": 237,
	"./tzl": 238,
	"./tzl.js": 238,
	"./tzm": 239,
	"./tzm-latn": 240,
	"./tzm-latn.js": 240,
	"./tzm.js": 239,
	"./ug-cn": 241,
	"./ug-cn.js": 241,
	"./uk": 242,
	"./uk.js": 242,
	"./ur": 243,
	"./ur.js": 243,
	"./uz": 244,
	"./uz-latn": 245,
	"./uz-latn.js": 245,
	"./uz.js": 244,
	"./vi": 246,
	"./vi.js": 246,
	"./x-pseudo": 247,
	"./x-pseudo.js": 247,
	"./yo": 248,
	"./yo.js": 248,
	"./zh-cn": 249,
	"./zh-cn.js": 249,
	"./zh-hk": 250,
	"./zh-hk.js": 250,
	"./zh-tw": 251,
	"./zh-tw.js": 251
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 389;

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/vagrant/projects/finance-google/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n<!-- <page-home></page-home> -->\n'/*ion-inline-end:"/home/vagrant/projects/finance-google/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reddit_data_reddit_data__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http ,Response} from '@angular/http';


// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
/**
 * Generated class for the MarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarketPage = /** @class */ (function () {
    function MarketPage(navCtrl, navParams, injector, platform, redditService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.injector = injector;
        this.platform = platform;
        this.redditService = redditService;
        this.categories = [{ "name": "saghj" }, { "name": "dysk" }, { "name": "saghj" }, { "name": "dysk" }, { "name": "saghj" }, { "name": "dysk" }];
        this.currencies = [];
    }
    MarketPage.prototype.ngOnInit = function () {
    };
    MarketPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.redditService.getData().subscribe(function (data) {
            //console.log(data);
            _this.items = data;
        });
        this.redditService.getCurrencies().subscribe(function (data) {
            _this.currencies = data;
        });
        this.showLeftButton = false;
        this.showRightButton = this.categories.length > 2;
    };
    MarketPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        this.showLeftButton = true;
        console.log('Current index is', currentIndex);
    };
    MarketPage.prototype.slideNext = function () {
        this.slides.slideNext();
        if (!this.slides.slideNext()) {
            this.showRightButton = false;
            this.showLeftButton = true;
        }
    };
    MarketPage.prototype.slidePrev = function () {
        this.slides.slidePrev();
        if (!this.slides.slidePrev()) {
            this.showRightButton = true;
            this.showLeftButton = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */]) === "function" && _a || Object)
    ], MarketPage.prototype, "slides", void 0);
    MarketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-market',template:/*ion-inline-start:"/home/vagrant/projects/finance-google/src/pages/market/market.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>You may be interested in</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <!--  <ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>App Name</ion-title>\n    </ion-navbar>\n    <ion-toolbar>\n        <ion-row class="filters">\n            <ion-col class="col-with-arrow" (click)="slidePrev()" no-padding col-1>\n                <ion-icon *ngIf="showLeftButton" name="arrow-back"></ion-icon>\n            </ion-col>\n            <ion-col no-padding col-10>\n                <ion-slides (ionSlideDidChange)="slideChanged()" slidesPerView="3">\n                    <ion-slide *ngFor="let category of categories">\n                        <p>{{ category.name }}</p>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n            <ion-col class="col-with-arrow" (click)="slideNext()" no-padding col-1>\n                <ion-icon *ngIf="showRightButton" name="arrow-forward"></ion-icon>\n            </ion-col>\n        </ion-row>\n\n    </ion-toolbar>\n</ion-header> -->\n\n<ion-row class="layout">\n    	<ion-slides slidesPerView="2">\n    		\n    		<ion-slide *ngFor="let item of items">\n    		<ion-card>\n    			\n    			<!-- <ion-list>\n    			<ion-item> -->\n    				\n    			<!-- </ion-item>	\n    			 -->\n    			<!-- </ion-list>\n    			<ion-item > -->\n    				<ion-list>\n    				<!-- <ion-item> -->\n    					<!-- <p>{{item.company}}</p> -->\n    				<!-- </ion-item> -->\n    				<ion-item>\n\n    					<h3>{{item.company}}</h3>\n    					<p>{{item.title}}</p>\n    					<br/>\n    					<!-- <ion-item> -->\n    					<div>\n    						{{item.stockprice}}\n    				    <span class="price">\n							{{item.stockpercent}}\n							<ion-icon name="arrow-round-up"></ion-icon>\n						</span>\n    				</div>\n    				    <!-- </ion-item> -->\n    				    <br/>\n    				</ion-item>\n    				\n    				</ion-list>\n    				<!-- <ion-item></ion-item> -->\n    				<ion-list>\n    				\n    				<ion-card-content>\n    					<h3><a href=""><b><ion-icon name="add"></ion-icon>FOLLOW</b></a></h3>\n    				</ion-card-content>\n    			\n    			</ion-list>\n\n    			<!-- /ion-item> -->\n    		</ion-card>\n    		</ion-slide>   \n\n    	</ion-slides>\n</ion-row>\n \n<h2>Top Stories</h2>\n\n<ion-card>\n<ion-row>\n	<ion-slides>\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/ban.png"/>\n	  <ion-card-content>\n	    <a href="">\n	      Q4 report card: Losses in banking sector tower over \n	      4 times its profits so far; PNB and SBI hit the most\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/cityjobs.jpeg"/>\n	  <ion-card-content>\n	    <a href="">\n	      City jobs under threat as Deutsche Bank swings axe\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/uniform.jpg"/>\n	  <ion-card-content>\n	    <a href="">\n	      Uniform 12 pc road tax to make cars cheaper in Mumbai but dearer in Delhi\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/paytm.jpg"/>\n	  <ion-card-content>\n	    <a href="">\n	      Paytm acquires Alibaba-backed TicketNew for around $40 million\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	</ion-slides>\n</ion-row>\n</ion-card>\n\n<h2>Local Market News</h2>\n<ion-card>\n<ion-row>\n	<ion-slides>\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/paytm.jpg"/>\n	  <ion-card-content>\n	    <a href="">\n	      Paytm acquires Alibaba-backed TicketNew for around $40 million\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/ban.png"/>\n	  <ion-card-content>\n	    <a href="">\n	      Q4 report card: Losses in banking sector tower over \n	      4 times its profits so far; PNB and SBI hit the most\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/cityjobs.jpeg"/>\n	  <ion-card-content>\n	    <a href="">\n	      City jobs under threat as Deutsche Bank swings axe\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/uniform.jpg"/>\n	  <ion-card-content>\n	    <a href="">\n	      Uniform 12 pc road tax to make cars cheaper in Mumbai but dearer in Delhi\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	\n	</ion-slides>\n</ion-row>\n</ion-card>\n\n<h2>World market news</h2>\n\n<ion-card>\n<ion-row>\n	<ion-slides>\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/uniform.jpg"/>\n	  <ion-card-content>\n	    <a href="">\n	      Uniform 12 pc road tax to make cars cheaper in Mumbai but dearer in Delhi\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/ban.png"/>\n	  <ion-card-content>\n	    <a href="">\n	      Q4 report card: Losses in banking sector tower over \n	      4 times its profits so far; PNB and SBI hit the most\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/paytm.jpg"/>\n	  <ion-card-content>\n	    <a href="">\n	      Paytm acquires Alibaba-backed TicketNew for around $40 million\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	<ion-slide>\n	<ion-card>\n	  <img src="assets/imgs/cityjobs.jpeg"/>\n	  <ion-card-content>\n	    <a href="">\n	      City jobs under threat as Deutsche Bank swings axe\n	    </a>\n	  </ion-card-content>\n	</ion-card>\n	</ion-slide>\n	\n	</ion-slides>\n</ion-row>\n</ion-card>\n \n<h2>United States markets</h2>\n\n<ion-row class="divider">\n	<ion-card>\n		<ion-list *ngFor="let item of items">\n\n			<ion-item >\n				<div>\n				<a href="">{{item.company}}</a>\n				<span class="price">{{item.stockprice}}</span>\n				</div>\n				<div>\n				<ion-note>{{item.title}}</ion-note>\n				<span class="up">\n				<ion-icon name="add"></ion-icon>\n					{{item.stockpercent}}\n				<ion-icon name="arrow-round-up"></ion-icon>\n			    </span>\n				</div>\n			</ion-item>\n\n			<!-- <ion-item>dyshujak</ion-item>\n\n			<ion-item>dyshujak</ion-item> -->\n 		</ion-list>\n	</ion-card>\n</ion-row>\n\n<h2>World markets</h2>\n<ion-row class="divider">\n	<ion-card>\n		<ion-list *ngFor="let item of items">\n\n			<ion-item >\n				<div>\n				<a href="">{{item.company}}</a>\n				<span class="price">{{item.stockprice}}</span>\n				</div>\n				<div>\n				<ion-note>{{item.title}}</ion-note>\n				<span class="down">\n				<ion-icon name="remove"></ion-icon>\n					{{item.stockpercent}}\n				<ion-icon name="arrow-round-down"></ion-icon></span>\n				</div>\n			</ion-item>\n\n			<!-- <ion-item>dyshujak</ion-item>\n\n			<ion-item>dyshujak</ion-item> -->\n 		</ion-list>\n	</ion-card>\n</ion-row>\n\n<h2>Currencies</h2>  \n<ion-row class="divider">\n	<ion-card>\n		<ion-list *ngFor="let item of currencies">\n\n			<ion-item >\n				<div>\n				<a href="">{{item.currency}}</a>\n				<span class="price">{{item.value}}</span>\n				</div>\n				<div>\n				<ion-note>{{item.time}}</ion-note>\n				<span class="up">{{item.percent}}\n				<ion-icon name="arrow-round-up"></ion-icon></span>\n				</div>\n			</ion-item>\n\n			<!-- <ion-item>dyshujak</ion-item>\n\n			<ion-item>dyshujak</ion-item> -->\n 		</ion-list>\n	</ion-card>\n</ion-row>     \n   \n\n</ion-content>\n\n\n<!-- <ion-col no-padding col-3>\n 	<h3>\n 	<ion-list class="column">\n 	<ion-item></ion-item>\n 	<ion-item>Dow Jones Industrial Average</ion-item>\n 	<ion-item>Russell 2000 Index</ion-item>\n 	<ion-item>NYSE Composite Index</ion-item>\n 	<ion-item>Nasdaq Composite</ion-item>\n 	<ion-item></ion-item>\n 	</ion-list>\n 	</ion-col> -->\n\n\n <!-- 	<ion-row class="world">\n	<ion-card>\n	 	<ion-avatar item-start>\n      		<img src="assets/imgs/ban.png">\n    	</ion-avatar>\n		<ion-card-content>\n		IT department releases all e-filing forms for AY 2018-19, last date for filing is July 31\n	   </ion-card-content>\n	</ion-card>\n	<ion-card>\n		 <ion-avatar item-start>\n      		<img src="assets/imgs/ban.png">\n    	</ion-avatar>\n		<ion-card-content>\n		IT department releases all e-filing forms for AY 2018-19, last date for filing is July 31\n	   </ion-card-content>\n	</ion-card>\n</ion-row> -->\n\n\n<!-- //slides with arrow -->\n\n\n<!-- <ion-row class="filters">\n	<ion-col class="col-with-arrow" (click)="slidePrev()" no-padding col-1>\n                <ion-icon *ngIf="showLeftButton" name="arrow-back"></ion-icon>\n    </ion-col>\n\n    <ion-col no-padding col-7>\n    	\n    	<ion-slides (ionSlideDidChange)="slideChanged()" slidesPerView="2">\n    		\n    		<ion-slide *ngFor="let category of categories">\n    		<ion-card>\n    			<ion-card-header>{{category.name}}</ion-card-header>\n    			\n    			 <h3><ion-icon name="add"></ion-icon>FOLLOW</h3>\n    		</ion-card>\n    		</ion-slide>   \n    	</ion-slides>\n        \n    </ion-col>\n\n    <ion-col class="col-with-arrow" (click)="slideNext()" no-padding col-1>\n                <ion-icon *ngIf="showRightButton" name="arrow-forward"></ion-icon>\n    </ion-col>\n\n\n</ion-row> -->'/*ion-inline-end:"/home/vagrant/projects/finance-google/src/pages/market/market.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_reddit_data_reddit_data__["a" /* RedditDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_reddit_data_reddit_data__["a" /* RedditDataProvider */]) === "function" && _f || Object])
    ], MarketPage);
    return MarketPage;
    var _a, _b, _c, _d, _e, _f;
}());

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
//# sourceMappingURL=market.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StocksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StocksPage = /** @class */ (function () {
    function StocksPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StocksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StocksPage');
    };
    StocksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stocks',template:/*ion-inline-start:"/home/vagrant/projects/finance-google/src/pages/stocks/stocks.html"*/'<!--\n  Generated template for the StocksPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Stocks</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card>\n	<ion-card-content>\n	You\'re not currently following any stocks. You can follow your favourite stocks for quick access and stay updated with the latest financial news.\n	</ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/vagrant/projects/finance-google/src/pages/stocks/stocks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], StocksPage);
    return StocksPage;
}());

//# sourceMappingURL=stocks.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalMarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LocalMarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalMarketPage = /** @class */ (function () {
    function LocalMarketPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LocalMarketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocalMarketPage');
    };
    LocalMarketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-local-market',template:/*ion-inline-start:"/home/vagrant/projects/finance-google/src/pages/local-market/local-market.html"*/'<!--\n  Generated template for the LocalMarketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>local-market</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vagrant/projects/finance-google/src/pages/local-market/local-market.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], LocalMarketPage);
    return LocalMarketPage;
}());

//# sourceMappingURL=local-market.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldMarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WorldMarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorldMarketPage = /** @class */ (function () {
    function WorldMarketPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WorldMarketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorldMarketPage');
    };
    WorldMarketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-world-market',template:/*ion-inline-start:"/home/vagrant/projects/finance-google/src/pages/world-market/world-market.html"*/'<!--\n  Generated template for the WorldMarketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>world-market</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vagrant/projects/finance-google/src/pages/world-market/world-market.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], WorldMarketPage);
    return WorldMarketPage;
}());

//# sourceMappingURL=world-market.js.map

/***/ })

},[338]);
//# sourceMappingURL=main.js.map