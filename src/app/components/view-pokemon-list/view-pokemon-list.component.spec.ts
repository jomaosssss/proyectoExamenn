import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPokemonListComponent } from './view-pokemon-list.component';

describe('ViewPokemonListComponent', () => {
  let component: ViewPokemonListComponent;
  let fixture: ComponentFixture<ViewPokemonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPokemonListComponent]
    });
    fixture = TestBed.createComponent(ViewPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
