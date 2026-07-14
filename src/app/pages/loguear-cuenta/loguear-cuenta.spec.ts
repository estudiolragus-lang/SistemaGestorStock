import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoguearCuenta } from './loguear-cuenta';

describe('LoguearCuenta', () => {
  let component: LoguearCuenta;
  let fixture: ComponentFixture<LoguearCuenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoguearCuenta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoguearCuenta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
