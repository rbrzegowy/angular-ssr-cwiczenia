import { Component, inject, Input } from '@angular/core'
import { DummyJsonApiService } from '../../services/dummyjson-api.service'
import { Observable } from 'rxjs'
import { APIProduct } from '../../models/api-products.model'

@Component({
  selector: 'app-dummy-product',
  templateUrl: './dummy-product.component.html',
  styleUrl: './dummy-product.component.scss'
})
export class DummyProductComponent {
  @Input({ required: true }) id!: number

  private readonly api = inject(DummyJsonApiService)

  product!: Observable<APIProduct>
  ngOnInit(): void {
    this.product = this.api.getProduct(this.id)
  }
}
