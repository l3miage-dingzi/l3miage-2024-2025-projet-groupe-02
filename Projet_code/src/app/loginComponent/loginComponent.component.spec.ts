import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentComponent } from './loginComponent.component';

describe('ComponentNameComponent', () => {
  let component: LoginComponentComponent;
  let fixture: ComponentFixture<LoginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
