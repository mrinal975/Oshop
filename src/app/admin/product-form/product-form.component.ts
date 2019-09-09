import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductServiceService } from '../../product-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  category$;
  constructor(categoryService:CategoryService,private product:ProductServiceService) {
    this.category$ = categoryService.getCategories();

   }

  ngOnInit() {
  }
  save(product){
    this.product.save(product);
  }

}
