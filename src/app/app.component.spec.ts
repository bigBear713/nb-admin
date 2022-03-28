import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTplRefInstance, NbCommonTestingModule } from '@bigbear713/nb-common';
import { NbFormTestingModule } from '@bigbear713/nb-form';
import { NbTransTestingModule } from '@bigbear713/nb-trans';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NbCommonTestingModule,
        NbFormTestingModule,
        NbTransTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: []
    }).compileComponents();
  });

  it('should create the template ref instance', () => {
    const instance = getTplRefInstance(TestBed);
    expect(instance).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
