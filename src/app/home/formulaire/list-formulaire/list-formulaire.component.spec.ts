import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormulaireComponent } from './list-formulaire.component';

describe('ListFormulaireComponent', () => {
  let component: ListFormulaireComponent;
  let fixture: ComponentFixture<ListFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFormulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
