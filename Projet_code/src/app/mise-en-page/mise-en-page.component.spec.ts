import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseEnPageComponent } from './mise-en-page.component';

describe('MiseEnPageComponent', () => {
  let component: MiseEnPageComponent;
  let fixture: ComponentFixture<MiseEnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiseEnPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiseEnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
