import { inject, Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { forkJoin, of, tap } from 'rxjs';
import { AccountService } from './account.service';
import { SignalrService } from './signalr.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private cartService = inject(CartService);
  private accountService = inject(AccountService);
  private signalrService = inject(SignalrService);

  init(){
    const cartId = localStorage.getItem('cart_id');
    const cart$ = cartId ? this.cartService.getCart(cartId) : of(null);
    // return cart$;
    return forkJoin({
      cart : cart$,
      user : this.accountService.getUserInfo().pipe(
        tap(user => {
          if(user) this.signalrService.createHubConnection();
        })
      )
    })
  }
}
