import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderFiltrosComponent } from './header-filtros.component';

describe('HeaderFiltrosComponent', () => {
  let component: HeaderFiltrosComponent;
  let fixture: ComponentFixture<HeaderFiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFiltrosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderFiltrosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
