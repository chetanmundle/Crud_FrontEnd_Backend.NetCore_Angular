import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiFetchComponent } from './get-api-fetch.component';

describe('GetApiFetchComponent', () => {
  let component: GetApiFetchComponent;
  let fixture: ComponentFixture<GetApiFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiFetchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApiFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
