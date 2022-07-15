import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMesComponent } from './show-mes.component';

describe('ShowMesComponent', () => {
  let component: ShowMesComponent;
  let fixture: ComponentFixture<ShowMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
