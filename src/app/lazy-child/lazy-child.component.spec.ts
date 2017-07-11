import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyChildComponent } from './lazy-child.component';

describe('LazyChildComponent', () => {
  let component: LazyChildComponent;
  let fixture: ComponentFixture<LazyChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
