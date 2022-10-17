import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagDeLoadComponent } from './pag-de-load.component';

describe('PagDeLoadComponent', () => {
  let component: PagDeLoadComponent;
  let fixture: ComponentFixture<PagDeLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagDeLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagDeLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
