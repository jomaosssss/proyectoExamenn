import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegistrosComponent } from './view-registros.component';

describe('ViewRegistrosComponent', () => {
  let component: ViewRegistrosComponent;
  let fixture: ComponentFixture<ViewRegistrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRegistrosComponent]
    });
    fixture = TestBed.createComponent(ViewRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
