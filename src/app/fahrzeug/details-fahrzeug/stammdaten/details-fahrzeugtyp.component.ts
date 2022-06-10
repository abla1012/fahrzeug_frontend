/*
 * Copyright (C) 2015 - present Juergen Zimmermann, Hochschule Karlsruhe
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

import { Component, Input, type OnInit } from '@angular/core';
import { type Fahrzeugtyp } from '../../shared/fahrzeug';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-details-Fahrzeugtyp</code>
 */
@Component({
    selector: 'hs-details-fahrzeugtyp',
    templateUrl: './details-fahrzeugtyp.component.html',
})
export class DetailsFahrzeugtypComponent implements OnInit {
    @Input()
    fahrzeugtyp: Fahrzeugtyp | '' | undefined;

    ngOnInit() {
        log.debug('DetailsFahrzeugtypComponent.fahrzeugtyp=', this.fahrzeugtyp);
    }
}
