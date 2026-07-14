import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularEmpresa } from './vincular-empresa';

describe('VincularEmpresa', () => {
  let component: VincularEmpresa;
  let fixture: ComponentFixture<VincularEmpresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VincularEmpresa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VincularEmpresa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
