import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallByServiceComponent } from './api-call-by-service.component';

describe('ApiCallByServiceComponent', () => {
  let component: ApiCallByServiceComponent;
  let fixture: ComponentFixture<ApiCallByServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCallByServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCallByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
