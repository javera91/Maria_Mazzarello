import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1HeaderComponent } from './p1-header.component';

describe('P1HeaderComponent', () => {
  let component: P1HeaderComponent;
  let fixture: ComponentFixture<P1HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P1HeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
