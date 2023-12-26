import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoJuradosComponent } from './acesso-jurados.component';

describe('AcessoJuradosComponent', () => {
  let component: AcessoJuradosComponent;
  let fixture: ComponentFixture<AcessoJuradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessoJuradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcessoJuradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
