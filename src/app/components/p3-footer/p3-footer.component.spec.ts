import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3FooterComponent } from './p3-footer.component';

describe('P3FooterComponent', () => {
  let component: P3FooterComponent;
  let fixture: ComponentFixture<P3FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P3FooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P3FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
