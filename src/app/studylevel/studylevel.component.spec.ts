import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudylevelComponent } from './studylevel.component';

describe('StudylevelComponent', () => {
  let component: StudylevelComponent;
  let fixture: ComponentFixture<StudylevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudylevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudylevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
