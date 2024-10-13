import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutApiFetchComponent } from './put-api-fetch.component';

describe('PutApiFetchComponent', () => {
  let component: PutApiFetchComponent;
  let fixture: ComponentFixture<PutApiFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutApiFetchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutApiFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
