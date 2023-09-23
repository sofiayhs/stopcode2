import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementiTransazioneComponent } from './elementi-transazione.component';

describe('ElementiTransazioneComponent', () => {
  let component: ElementiTransazioneComponent;
  let fixture: ComponentFixture<ElementiTransazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementiTransazioneComponent]
    });
    fixture = TestBed.createComponent(ElementiTransazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
