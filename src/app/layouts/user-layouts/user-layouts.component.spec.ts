import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLayoutsComponent } from './user-layouts.component';

describe('UserLayoutsComponent', () => {
  let component: UserLayoutsComponent;
  let fixture: ComponentFixture<UserLayoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLayoutsComponent]
    });
    fixture = TestBed.createComponent(UserLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
