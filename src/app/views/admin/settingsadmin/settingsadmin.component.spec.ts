import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsadminComponent } from './settingsadmin.component';

describe('SettingsadminComponent', () => {
  let component: SettingsadminComponent;
  let fixture: ComponentFixture<SettingsadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsadminComponent]
    });
    fixture = TestBed.createComponent(SettingsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
