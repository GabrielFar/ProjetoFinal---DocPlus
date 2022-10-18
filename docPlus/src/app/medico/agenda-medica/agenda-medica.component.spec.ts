import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaMedicaComponent } from './agenda-medica.component';

describe('AgendaMedicaComponent', () => {
  let component: AgendaMedicaComponent;
  let fixture: ComponentFixture<AgendaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaMedicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
