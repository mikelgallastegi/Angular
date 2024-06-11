import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoContactosComponent } from './listado-contactos.component';

describe('ListadoContactosComponent', () => {
  let component: ListadoContactosComponent;
  let fixture: ComponentFixture<ListadoContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoContactosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
