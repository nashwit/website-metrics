import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCostComponent } from './total-cost-card.component';

describe('TotalCostComponent', () => {
  let component: TotalCostComponent;
  let fixture: ComponentFixture<TotalCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
