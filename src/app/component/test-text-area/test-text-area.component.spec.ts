import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTextAreaComponent } from './test-text-area.component';

describe('TestTextAreaComponent', () => {
  let component: TestTextAreaComponent;
  let fixture: ComponentFixture<TestTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
