import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseclassComponent } from './courseclass.component';

describe('CourseclassComponent', () => {
  let component: CourseclassComponent;
  let fixture: ComponentFixture<CourseclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
