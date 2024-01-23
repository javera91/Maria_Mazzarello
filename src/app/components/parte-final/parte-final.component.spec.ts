import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteFinalComponent } from './parte-final.component';

describe('ParteFinalComponent', () => {
  let component: ParteFinalComponent;
  let fixture: ComponentFixture<ParteFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParteFinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParteFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
