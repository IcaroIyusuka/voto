import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroJuizesComponent } from './cadastro-juizes.component';

describe('CadastroJuizesComponent', () => {
  let component: CadastroJuizesComponent;
  let fixture: ComponentFixture<CadastroJuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroJuizesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroJuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
