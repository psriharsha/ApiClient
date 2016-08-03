import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {Hero} from './hero'
import {HeroService} from './hero.service'
import {LoginService} from '../login/login.service'

@Component({
    template : `<ul class="list-group">
                <li *ngFor = "let hero of heroes" class="list-group-item">{{hero.name}}</li>
                </ul>
                <p *ngIf = "heroes.length == 0">No data</p>
                <button (click) = "getHeroes()">Refresh Data</button>
                <button (click) = "mockHeroes()">Mock Data</button>`,
    providers : [LoginService]
})
export class HeroComponent{

    heroes : Hero[];
    errorMessage : string;
    constructor(private heroService : HeroService, private _loginService : LoginService, private _router : Router){
        this.heroes = heroService.heroes;
    }

    ngOnInit(){
        if(!this._loginService.isAuthenticated()){
            this._router.navigate(['login']);
        }
    }

    getHeroes() {
        this.heroService.getHeroes()
                        .subscribe(heroes => this.heroes = heroes,
                        error =>  this.errorMessage = <any>error);
    }

    setHeroes(heroes : Hero[]){
        this.heroes = heroes;
        console.log(this.heroes.length);
    }

    mockHeroes(){
        var tempHero = new Hero();
        tempHero.name = "Gary";
        this.heroes.push(tempHero);
    }
    
}