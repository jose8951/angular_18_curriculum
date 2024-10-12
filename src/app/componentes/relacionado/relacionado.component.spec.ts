import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionadoComponent } from './relacionado.component';

describe('RelacionadoComponent', () => {
  let component: RelacionadoComponent;
  let fixture: ComponentFixture<RelacionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelacionadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
