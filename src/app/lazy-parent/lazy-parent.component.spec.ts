import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyParentComponent } from './lazy-parent.component';

describe('LazyParentComponent', () => {
  let component: LazyParentComponent;
  let fixture: ComponentFixture<LazyParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
