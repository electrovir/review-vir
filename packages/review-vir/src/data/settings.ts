import localForage from 'localforage-esm';
import {
    assertValidShape,
    defineShape,
    exact,
    isValidShape,
    optional,
    or,
} from 'object-shape-tester';
import {ServiceAuthTokens} from './auth-tokens.js';

export enum UiColorMode {
    Dark = 'dark',
    Light = 'light',
    Auto = 'auto',
}

export type AppSettings = {
    authTokens: ServiceAuthTokens;
} & typeof nonTokenSettingsShape.runtimeType;

const nonTokenSettingsShape = defineShape({
    userSettings: {
        /** The other modes aren't supported yet. */
        uiColorMode: exact(UiColorMode.Light),
    },

    lastSelectedOrg: optional(or(undefined, 'org name')),
});

export const reviewVirSettingsStore = localForage.createInstance({
    description: 'Settings for review-vir.',
    name: 'review-vir-settings',
    storeName: 'review-vir-settings',
});

const savedSettingsKey = 'saved-settings';

export async function loadSettings() {
    const savedSettings = await reviewVirSettingsStore.getItem(savedSettingsKey);

    if (isValidShape(savedSettings, nonTokenSettingsShape)) {
        return savedSettings;
    } else {
        return nonTokenSettingsShape.defaultValue;
    }
}

export async function saveSettings(
    newSettings: Readonly<Omit<AppSettings, 'authTokens'>>,
): Promise<void> {
    assertValidShape(newSettings, nonTokenSettingsShape);
    await reviewVirSettingsStore.setItem(savedSettingsKey, newSettings);
}
