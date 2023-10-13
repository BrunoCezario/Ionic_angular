import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArquivosPage } from './arquivos.page';

describe('ArquivosPage', () => {
  let component: ArquivosPage;
  let fixture: ComponentFixture<ArquivosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArquivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
