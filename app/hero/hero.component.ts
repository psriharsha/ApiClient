import {Component} from '@angular/core';
import {Hero} from './hero'
import {HeroService} from './hero.service'

@Component({
    selector : 'hero-list',
    template : `<ul>
                <li *ngFor = "let hero of heroes">{{hero.name}}</li>
                </ul>
                <p *ngIf = "heroes.length == 0">No data</p>
                <button (click) = "getHeroes()">Refresh Data</button>
                <button (click) = "mockHeroes()">Mock Data</button>`
})
export class HeroComponent{

    heroes : Hero[];
    errorMessage : string;
    constructor(private heroService : HeroService){
        this.heroes = heroService.heroes;
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