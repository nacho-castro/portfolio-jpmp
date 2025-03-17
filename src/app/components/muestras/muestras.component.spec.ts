import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestrasComponent } from './muestras.component';

describe('MuestrasComponent', () => {
  let component: MuestrasComponent;
  let fixture: ComponentFixture<MuestrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuestrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuestrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
