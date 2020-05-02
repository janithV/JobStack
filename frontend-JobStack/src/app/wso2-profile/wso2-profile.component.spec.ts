import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wso2ProfileComponent } from './wso2-profile.component';

describe('Wso2ProfileComponent', () => {
  let component: Wso2ProfileComponent;
  let fixture: ComponentFixture<Wso2ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wso2ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wso2ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
