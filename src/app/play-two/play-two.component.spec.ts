import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayTwoComponent } from './play-two.component';

describe('PlayTwoComponent', () => {
  let component: PlayTwoComponent;
  let fixture: ComponentFixture<PlayTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
