/********************************************************************************
 * Copyright (C) 2020 Red Hat, Inc. and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { injectable } from 'inversify';
import { Emitter, Event } from '@theia/core/lib/common';
import URI from '@theia/core/lib/common/uri';

@injectable()
export class CommandEvents {
    private readonly onNewFileCommandExecutedEmitter = new Emitter<URI>();
    private readonly onFolderCommandEmitterExecuted = new Emitter<URI>();

    /**
     * Emit when the 'New File' command is clicked.
     */
    get onNewFileCommand(): Event<URI> {
        return this.onNewFileCommandExecutedEmitter.event;
    }

    /**
     * Emit when the 'New Folder' command is clicked.
     */
    get onNewFolderCommand(): Event<URI> {
        return this.onFolderCommandEmitterExecuted.event;
    }

    fireNewFileCommand(uri: URI): void {
        this.onNewFileCommandExecutedEmitter.fire(uri);
    }

    fireNewFolderCommand(uri: URI): void {
        this.onNewFileCommandExecutedEmitter.fire(uri);
    }
}
