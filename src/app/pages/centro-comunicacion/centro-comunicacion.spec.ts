import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroComunicacion } from './centro-comunicacion';

describe('CentroComunicacion', () => {
  let component: CentroComunicacion;
  let fixture: ComponentFixture<CentroComunicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroComunicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroComunicacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
