import {NgModule} from '@angular/core';
import { MatDatepickerModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    
    
    imports: [
     MatAutocompleteModule,
     MatNativeDateModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatIconModule,
      MatInputModule,
      NgxDaterangepickerMd.forRoot(),
      MatSelectModule,
      ],
    exports: [
     MatDatepickerModule,
     MatNativeDateModule,
     MatDatepickerModule,
     MatDialogModule,
     MatDividerModule,
     MatIconModule,
     MatInputModule,
     MatSelectModule,
    ]
    })

    export class MaterialModule{}