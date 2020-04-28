/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
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

import URI from '@theia/core/lib/common/uri';

/**
 * An event that is fired when files are going to be created.
 *
 * To make modifications to the workspace before the files are created,
 * call the [`waitUntil](#FileWillCreateEvent.waitUntil)-function with a
 * thenable that resolves to a [workspace edit](#WorkspaceEdit).
 */
export interface FileWillCreateEvent {

    /**
     * The files that are going to be created.
     */
    readonly files: ReadonlyArray<URI>;

    // /**
    //  * Allows to pause the event and to apply a [workspace edit](#WorkspaceEdit).
    //  *
    //  * *Note:* This function can only be called during event dispatch and not
    //  * in an asynchronous manner:
    //  *
    //  * ```ts
    //  * workspace.onWillCreateFiles(event => {
    //  *     // async, will *throw* an error
    //  *     setTimeout(() => event.waitUntil(promise));
    //  *
    //  *     // sync, OK
    //  *     event.waitUntil(promise);
    //  * })
    //  * ```
    //  *
    //  * @param thenable A thenable that delays saving.
    //  */
    // waitUntil(thenable: Thenable<WorkspaceEdit>): void;

    /**
     * Allows to pause the event until the provided thenable resolves.
     *
     * *Note:* This function can only be called during event dispatch.
     *
     * @param thenable A thenable that delays saving.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    waitUntil(thenable: Thenable<any>): void;
}

/**
 * An event that is fired after files are created.
 */
export interface FileCreateEvent {

    /**
     * The files that got created.
     */
    readonly files: ReadonlyArray<URI>;
}

/**
 * An event that is fired when files are going to be deleted.
 *
 * To make modifications to the workspace before the files are deleted,
 * call the [`waitUntil](#FileWillCreateEvent.waitUntil)-function with a
 * thenable that resolves to a [workspace edit](#WorkspaceEdit).
 */
export interface FileWillDeleteEvent {

    /**
     * The files that are going to be deleted.
     */
    readonly files: ReadonlyArray<URI>;

    // /**
    //  * Allows to pause the event and to apply a [workspace edit](#WorkspaceEdit).
    //  *
    //  * *Note:* This function can only be called during event dispatch and not
    //  * in an asynchronous manner:
    //  *
    //  * ```ts
    //  * workspace.onWillCreateFiles(event => {
    //  *     // async, will *throw* an error
    //  *     setTimeout(() => event.waitUntil(promise));
    //  *
    //  *     // sync, OK
    //  *     event.waitUntil(promise);
    //  * })
    //  * ```
    //  *
    //  * @param thenable A thenable that delays saving.
    //  */
    // waitUntil(thenable: Thenable<WorkspaceEdit>): void;

    /**
     * Allows to pause the event until the provided thenable resolves.
     *
     * *Note:* This function can only be called during event dispatch.
     *
     * @param thenable A thenable that delays saving.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    waitUntil(thenable: Thenable<any>): void;
}

/**
 * An event that is fired after files are deleted.
 */
export interface FileDeleteEvent {

    /**
     * The files that got deleted.
     */
    readonly files: ReadonlyArray<URI>;
}

/**
 * An event that is fired when files are going to be renamed.
 *
 * To make modifications to the workspace before the files are renamed,
 * call the [`waitUntil](#FileWillCreateEvent.waitUntil)-function with a
 * thenable that resolves to a [workspace edit](#WorkspaceEdit).
 */
export interface FileWillRenameEvent {

    /**
     * The files that are going to be renamed.
     */
    readonly files: ReadonlyArray<{ oldUri: URI, newUri: URI }>;

    // /**
    //  * Allows to pause the event and to apply a [workspace edit](#WorkspaceEdit).
    //  *
    //  * *Note:* This function can only be called during event dispatch and not
    //  * in an asynchronous manner:
    //  *
    //  * ```ts
    //  * workspace.onWillCreateFiles(event => {
    //  *     // async, will *throw* an error
    //  *     setTimeout(() => event.waitUntil(promise));
    //  *
    //  *     // sync, OK
    //  *     event.waitUntil(promise);
    //  * })
    //  * ```
    //  *
    //  * @param thenable A thenable that delays saving.
    //  */
    // waitUntil(thenable: Thenable<WorkspaceEdit>): void;

    /**
     * Allows to pause the event until the provided thenable resolves.
     *
     * *Note:* This function can only be called during event dispatch.
     *
     * @param thenable A thenable that delays saving.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    waitUntil(thenable: Thenable<any>): void;
}

/**
 * An event that is fired after files are renamed.
 */
export interface FileRenameEvent {

    /**
     * The files that got renamed.
     */
    readonly files: ReadonlyArray<{ oldUri: URI, newUri: URI }>;
}
