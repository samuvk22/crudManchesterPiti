import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCampoComponent } from './listar-campo.component';

describe('ListarCampoComponent', () => {
  let component: ListarCampoComponent;
  let fixture: ComponentFixture<ListarCampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCampoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
