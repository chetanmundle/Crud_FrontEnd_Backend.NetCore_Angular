import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiFetchComponent } from './post-api-fetch.component';

describe('PostApiFetchComponent', () => {
  let component: PostApiFetchComponent;
  let fixture: ComponentFixture<PostApiFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostApiFetchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApiFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
