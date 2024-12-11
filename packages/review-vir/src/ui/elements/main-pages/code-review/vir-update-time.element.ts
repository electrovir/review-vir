import {FullDate, getNowInUserTimezone, toRelativeString} from 'date-vir';
import {defineElement, nothing} from 'element-vir';

export const VirUpdateTime = defineElement<{updateTime: Readonly<FullDate> | undefined}>()({
    tagName: 'vir-update-time',
    stateInitStatic: {
        now: getNowInUserTimezone(),
        intervalId: undefined as undefined | ReturnType<typeof globalThis.setInterval>,
    },
    init({updateState, state}) {
        if (!state.intervalId) {
            updateState({
                intervalId: globalThis.setInterval(() => {
                    updateState({
                        now: getNowInUserTimezone(),
                    });
                }, 3000),
            });
        }
    },
    cleanup({updateState, state}) {
        globalThis.clearInterval(state.intervalId);
        updateState({
            intervalId: undefined,
        });
    },
    render({inputs, state}) {
        if (!inputs.updateTime) {
            return nothing;
        }

        const relativeString = toRelativeString(
            {start: state.now, end: inputs.updateTime},
            {
                years: true,
                months: true,
                days: true,

                hours: true,
                minutes: true,
                seconds: true,
            },
            {
                useOnlyLargestUnit: true,
                justNowThresholds: {
                    milliseconds: 100,
                    minutes: 0.5,
                    seconds: 3,
                },
            },
        );

        return relativeString;
    },
});
