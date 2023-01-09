import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSmartphonesComponent } from './list-smartphones.component';

describe('ListSmartphonesComponent', () => {
  let component: ListSmartphonesComponent;
  let fixture: ComponentFixture<ListSmartphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSmartphonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSmartphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
