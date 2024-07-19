import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationFooterComponent } from './information-footer.component';

describe('InformationFooterComponent', () => {
  let component: InformationFooterComponent;
  let fixture: ComponentFixture<InformationFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
