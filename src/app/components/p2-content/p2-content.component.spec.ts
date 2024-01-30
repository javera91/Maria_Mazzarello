import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2ContentComponent } from './p2-content.component';

describe('P2ContentComponent', () => {
  let component: P2ContentComponent;
  let fixture: ComponentFixture<P2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2ContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
