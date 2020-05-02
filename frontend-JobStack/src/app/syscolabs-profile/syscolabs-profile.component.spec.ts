import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyscolabsProfileComponent } from './syscolabs-profile.component';

describe('SyscolabsProfileComponent', () => {
  let component: SyscolabsProfileComponent;
  let fixture: ComponentFixture<SyscolabsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyscolabsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyscolabsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
