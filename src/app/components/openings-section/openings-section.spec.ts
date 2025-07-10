import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningsSection } from './openings-section';

describe('OpeningsSection', () => {
  let component: OpeningsSection;
  let fixture: ComponentFixture<OpeningsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeningsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
