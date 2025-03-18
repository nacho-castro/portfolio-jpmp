import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWspComponent } from './btn-wsp.component';

describe('BtnWspComponent', () => {
  let component: BtnWspComponent;
  let fixture: ComponentFixture<BtnWspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnWspComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnWspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
