import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTransazioniComponent } from './lista-transazioni.component';

describe('ListaTransazioniComponent', () => {
  let component: ListaTransazioniComponent;
  let fixture: ComponentFixture<ListaTransazioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTransazioniComponent]
    });
    fixture = TestBed.createComponent(ListaTransazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
