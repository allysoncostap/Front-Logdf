import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoCreatComponent } from './chamado-creat.component';

describe('ChamadoCreatComponent', () => {
  let component: ChamadoCreatComponent;
  let fixture: ComponentFixture<ChamadoCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChamadoCreatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChamadoCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
