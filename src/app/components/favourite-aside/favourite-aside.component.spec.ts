import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteAsideComponent } from './favourite-aside.component';

describe('FavouriteAsideComponent', () => {
  let component: FavouriteAsideComponent;
  let fixture: ComponentFixture<FavouriteAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
