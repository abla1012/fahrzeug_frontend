/*
 * Copyright (C) 2019 - present Juergen Zimmermann, Hochschule Karlsruhe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { DetailsBeschreibungComponent } from './details-beschreibung.component';
import { DetailsErstzulassungComponent } from './details-erstzulassung.component';
import { DetailsFahrzeughalterComponent } from './details-fahrzeughalter.component';
import { DetailsFahrzeugtypComponent } from './details-fahrzeugtyp.component';
import { DetailsKennzeichenComponent } from './details-kennzeichen.component';
import { DetailsKilometerstandComponent } from './details-kilometerstand.component';
import { DetailsStammdatenComponent } from './details-stammdaten.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    declarations: [
        DetailsBeschreibungComponent,
        DetailsErstzulassungComponent,
        DetailsFahrzeughalterComponent,
        DetailsFahrzeugtypComponent,
        DetailsKennzeichenComponent,
        DetailsKilometerstandComponent,
        DetailsStammdatenComponent,
    ],
    exports: [DetailsStammdatenComponent],
})
export class DetailsStammdatenModule {}
