import {NgModule} from '@angular/core';

import {
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
        MatIconModule,
        MatCardModule,
        MatPaginatorModule,
        MatTableModule
    ],
    exports: [
        MatIconModule,
        MatCardModule,
        MatPaginatorModule,
        MatTableModule
    ]
})

export class materialModule{}