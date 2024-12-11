import {defineTypedEvent} from 'element-vir';
import {ReviewVirFullRoute} from '../../data/routing.js';

export const ChangeRouteEvent =
    defineTypedEvent<Readonly<Partial<Readonly<ReviewVirFullRoute>>>>()('change-route');
