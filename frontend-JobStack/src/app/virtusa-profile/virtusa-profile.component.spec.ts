import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusaProfileComponent } from './virtusa-profile.component';

describe('VirtusaProfileComponent', () => {
  let component: VirtusaProfileComponent;
  let fixture: ComponentFixture<VirtusaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtusaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtusaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
