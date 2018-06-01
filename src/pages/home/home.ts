import { Component,ViewChild,ViewContainerRef} from '@angular/core';
import {  NavController} from 'ionic-angular';
import { Chart } from 'chart.js';
// import {MarketPage} from '../market/market';
// import {StocksPage} from '../stocks/stocks';
// import {WorldMarketPage} from '../world-market/world-market';
// import {LocalMarketPage} from '../local-market/local-market';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private lineCanvasRef:ViewContainerRef;
  private lineCanvaslocalRef:ViewContainerRef;
  

  @ViewChild('lineCanvas') set lineCanvas(elRef: ViewContainerRef) {
    this.lineCanvasRef = elRef;
  }


  @ViewChild('lineCanvaslocal') set lineCanvaslocal(elRef:ViewContainerRef){
    this.lineCanvaslocalRef=elRef;
  }

  lineChart: any;
  lineCharts:any;

  items=[];
  currencies=[];
  news=[];
  market:boolean=false;
  stocks:boolean=false;
  localMarket:boolean=false;
  worldMarket:boolean=false;


  

  constructor(public navCtrl: NavController, 
          public redditService: RedditDataProvider) {

  }

   ionViewDidLoad() {
    
    this.market=true;
    this.redditService.getData().subscribe(data => {
                    this.items = data;
        });
     this.redditService.getCurrencies().subscribe(data=>{
        this.currencies=data;
     });

   
      
  
    
  }
 
  

  marketSummary(){
    this.market=true;
    this.stocks=false;
    this.localMarket=false;
    this.worldMarket=false;
  	// this.navCtrl.push(MarketPage);
  }

  yourstocks(){
    this.redditService.getNews().subscribe(data=>{
        this.news=data;
     });
    this.stocks=true;
    this.market=false;
    this.localMarket=false;
    this.worldMarket=false;
  	//this.navCtrl.push(StocksPage);
  }

  localMarkets(){
    this.market=false;
    this.stocks=false;
    this.localMarket=true;
    this.worldMarket=false;

    setTimeout(()=>{
      this.lineCharts = new Chart(this.lineCanvaslocalRef.nativeElement, {
 
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
                        data: [-2.00,0.00,2.00,4.00],
                        spanGaps: false,
                    }
                ]
            }
 
        });


    });
    
  	//this.navCtrl.push(LocalMarketPage);
  }


  worldMarkets(){

    this.worldMarket=true;
    //console.log(this.lineCanvas);
    this.market=false;
    this.stocks=false;
    this.localMarket=false;
    console.log(this.lineCanvasRef);

     setTimeout(() => { 


      console.log(this.lineCanvasRef);

         this.lineChart = new Chart(this.lineCanvasRef.nativeElement, {
 
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
  }


  
       
}
