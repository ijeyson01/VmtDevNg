import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloPadreComponent } from './modulo-padre.component';

describe('ModuloPadreComponent', () => {
  let component: ModuloPadreComponent;
  let fixture: ComponentFixture<ModuloPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuloPadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
