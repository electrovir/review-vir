import {defineTypedEvent} from 'element-vir';
import {ReviewVirFullRoute} from '../../data/routing/vir-route';

export const ChangeRouteEvent =
    defineTypedEvent<Readonly<{route: Readonly<ReviewVirFullRoute>}>>()('change-route');
