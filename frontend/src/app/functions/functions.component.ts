import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {

  restaurantName: string = ""
  review: string = ""
  imageUrl: string = ""
  quality: string = ""
  health: string = ""
  value: string = ""

  restaurantUpd8: string = ""
  reviewUpd8: string = ""
  imageUrlUpd8: string = ""
  qualityUpd8: string = ""
  healthUpd8: string = ""
  valueUpd8: string = ""
  idUpd8: string = ""

  idDelete: string = ""

  constructor(private mealService: MealService, private router: Router) { }

  ngOnInit() {
  }

  addMeal() {
    this.mealService.addMeal(this.restaurantName, this.review, this.quality, this.value, this.health, this.imageUrl).subscribe(
      ()=>{
        this.router.navigate(['/archive'])
      }
    )
  }

  deleteMeal() {
    this.mealService.deleteMeal(this.idDelete).subscribe(
      ()=>{
        this.router.navigate(['/archive'])
    })
  }

  updateMeal() {
    this.mealService.updateMeal(this.idUpd8, this.restaurantUpd8, this.reviewUpd8, this.qualityUpd8, this.valueUpd8, this.healthUpd8, this.imageUrlUpd8).subscribe(
      ()=>{
        this.router.navigate(['/archive'])
    })
  }
}
