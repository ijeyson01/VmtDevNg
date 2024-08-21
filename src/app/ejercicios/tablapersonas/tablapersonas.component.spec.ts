import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapersonasComponent } from './tablapersonas.component';

describe('TablapersonasComponent', () => {
  let component: TablapersonasComponent;
  let fixture: ComponentFixture<TablapersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablapersonasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablapersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
