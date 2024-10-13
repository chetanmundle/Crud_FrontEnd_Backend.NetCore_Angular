import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteApiFetchComponent } from './delete-api-fetch.component';

describe('DeleteApiFetchComponent', () => {
  let component: DeleteApiFetchComponent;
  let fixture: ComponentFixture<DeleteApiFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteApiFetchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteApiFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
