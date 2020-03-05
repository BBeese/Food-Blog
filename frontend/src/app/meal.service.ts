import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MealService {

  url = 'http://localhost:4000'
    
  constructor(private http: HttpClient) {}

  getAllMeals() {
    return this.http.get(this.url + '/meals')
  }

  getIssueById() {
    return this.http.get(this.url + '/meals/:{id}')
  }

  addMeal(restaurant: String, review: String, quality: String, value: String, health: String, image_url: String) {
    const meal = {
      restaurant : restaurant,
      review : review,
      quality : quality,
      value : value,
      health : health,
      image_url : image_url
    }

    return this.http.post(this.url + '/meals/add', meal)
  }
  
  updateMeal(id: String, restaurant: String, review: String, quality: String, value: String, health: String, image_url: String) {
    const meal = {
      restaurant : restaurant,
      review : review,
      quality : quality,
      value : value,
      health : health,
      image_url : image_url
    }
    const url = this.url + '/meals/update/' + id
    return this.http.post(url, meal)
  }

  deleteMeal(id: String) {
    const url = this.url + '/meals/delete/' + id
    return this.http.get(url)
  }
}
