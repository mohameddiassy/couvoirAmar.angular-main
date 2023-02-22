import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCollecteComponent } from './edit-collecte.component';

describe('EditCollecteComponent', () => {
  let component: EditCollecteComponent;
  let fixture: ComponentFixture<EditCollecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCollecteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCollecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
