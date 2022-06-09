import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarCampoComponent } from './reservar-campo.component';

describe('ReservarCampoComponent', () => {
  let component: ReservarCampoComponent;
  let fixture: ComponentFixture<ReservarCampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarCampoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
