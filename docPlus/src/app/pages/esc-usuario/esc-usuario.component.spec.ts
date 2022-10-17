import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscUsuarioComponent } from './esc-usuario.component';

describe('EscUsuarioComponent', () => {
  let component: EscUsuarioComponent;
  let fixture: ComponentFixture<EscUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
