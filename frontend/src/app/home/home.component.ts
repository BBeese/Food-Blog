import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service'
import { Router } from '@angular/router';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  meals: Meal[]
  lastMeal: Meal

  constructor(private mealService: MealService, private router: Router) { }

  ngOnInit() {
    this.getLastMeal()
  }

  getLastMeal() {
    this.mealService.getAllMeals().subscribe((data: Meal[]) => {
      this.meals = data
      this.lastMeal = this.meals[0]
      console.log("/home - Data Requested...")
    })
  }
}
