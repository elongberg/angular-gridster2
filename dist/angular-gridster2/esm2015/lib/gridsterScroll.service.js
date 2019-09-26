/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let scrollSensitivity;
/** @type {?} */
let scrollSpeed;
/** @type {?} */
const intervalDuration = 50;
/** @type {?} */
let gridsterElement;
/** @type {?} */
let resizeEvent;
/** @type {?} */
let resizeEventType;
/** @type {?} */
let intervalE;
/** @type {?} */
let intervalW;
/** @type {?} */
let intervalN;
/** @type {?} */
let intervalS;
/**
 * @param {?} gridster
 * @param {?} left
 * @param {?} top
 * @param {?} width
 * @param {?} height
 * @param {?} e
 * @param {?} lastMouse
 * @param {?} calculateItemPosition
 * @param {?=} resize
 * @param {?=} resizeEventScrollType
 * @return {?}
 */
export function scroll(gridster, left, top, width, height, e, lastMouse, calculateItemPosition, resize, resizeEventScrollType) {
    scrollSensitivity = gridster.$options.scrollSensitivity;
    scrollSpeed = gridster.$options.scrollSpeed;
    gridsterElement = gridster.el;
    resizeEvent = resize;
    resizeEventType = resizeEventScrollType;
    /** @type {?} */
    const offsetWidth = gridsterElement.offsetWidth;
    /** @type {?} */
    const offsetHeight = gridsterElement.offsetHeight;
    /** @type {?} */
    const offsetLeft = gridsterElement.scrollLeft;
    /** @type {?} */
    const offsetTop = gridsterElement.scrollTop;
    /** @type {?} */
    const elemTopOffset = top - offsetTop;
    /** @type {?} */
    const elemBottomOffset = offsetHeight + offsetTop - top - height;
    if (!gridster.$options.disableScrollVertical) {
        if (lastMouse.clientY < e.clientY && elemBottomOffset < scrollSensitivity) {
            cancelN();
            if ((resizeEvent && resizeEventType && !resizeEventType.s) || intervalS) {
                return;
            }
            intervalS = startVertical(1, calculateItemPosition, lastMouse);
        }
        else if (lastMouse.clientY > e.clientY && offsetTop > 0 && elemTopOffset < scrollSensitivity) {
            cancelS();
            if ((resizeEvent && resizeEventType && !resizeEventType.n) || intervalN) {
                return;
            }
            intervalN = startVertical(-1, calculateItemPosition, lastMouse);
        }
        else if (lastMouse.clientY !== e.clientY) {
            cancelVertical();
        }
    }
    /** @type {?} */
    const elemRightOffset = offsetLeft + offsetWidth - left - width;
    /** @type {?} */
    const elemLeftOffset = left - offsetLeft;
    if (!gridster.$options.disableScrollHorizontal) {
        if (lastMouse.clientX < e.clientX && elemRightOffset <= scrollSensitivity) {
            cancelW();
            if ((resizeEvent && resizeEventType && !resizeEventType.e) || intervalE) {
                return;
            }
            intervalE = startHorizontal(1, calculateItemPosition, lastMouse);
        }
        else if (lastMouse.clientX > e.clientX && offsetLeft > 0 && elemLeftOffset < scrollSensitivity) {
            cancelE();
            if ((resizeEvent && resizeEventType && !resizeEventType.w) || intervalW) {
                return;
            }
            intervalW = startHorizontal(-1, calculateItemPosition, lastMouse);
        }
        else if (lastMouse.clientX !== e.clientX) {
            cancelHorizontal();
        }
    }
}
/**
 * @param {?} sign
 * @param {?} calculateItemPosition
 * @param {?} lastMouse
 * @return {?}
 */
function startVertical(sign, calculateItemPosition, lastMouse) {
    /** @type {?} */
    let clientY = lastMouse.clientY;
    return setInterval((/**
     * @return {?}
     */
    () => {
        if (!gridsterElement || sign === -1 && gridsterElement.scrollTop - scrollSpeed < 0) {
            cancelVertical();
        }
        gridsterElement.scrollTop += sign * scrollSpeed;
        clientY += sign * scrollSpeed;
        calculateItemPosition({ clientX: lastMouse.clientX, clientY: clientY });
    }), intervalDuration);
}
/**
 * @param {?} sign
 * @param {?} calculateItemPosition
 * @param {?} lastMouse
 * @return {?}
 */
function startHorizontal(sign, calculateItemPosition, lastMouse) {
    /** @type {?} */
    let clientX = lastMouse.clientX;
    return setInterval((/**
     * @return {?}
     */
    () => {
        if (!gridsterElement || sign === -1 && gridsterElement.scrollLeft - scrollSpeed < 0) {
            cancelHorizontal();
        }
        gridsterElement.scrollLeft += sign * scrollSpeed;
        clientX += sign * scrollSpeed;
        calculateItemPosition({ clientX: clientX, clientY: lastMouse.clientY });
    }), intervalDuration);
}
/**
 * @return {?}
 */
export function cancelScroll() {
    cancelHorizontal();
    cancelVertical();
    gridsterElement = undefined;
}
/**
 * @return {?}
 */
function cancelHorizontal() {
    cancelE();
    cancelW();
}
/**
 * @return {?}
 */
function cancelVertical() {
    cancelN();
    cancelS();
}
/**
 * @return {?}
 */
function cancelE() {
    if (intervalE) {
        clearInterval(intervalE);
        intervalE = 0;
    }
}
/**
 * @return {?}
 */
function cancelW() {
    if (intervalW) {
        clearInterval(intervalW);
        intervalW = 0;
    }
}
/**
 * @return {?}
 */
function cancelS() {
    if (intervalS) {
        clearInterval(intervalS);
        intervalS = 0;
    }
}
/**
 * @return {?}
 */
function cancelN() {
    if (intervalN) {
        clearInterval(intervalN);
        intervalN = 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJTY3JvbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzdGVyU2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7SUFHSSxpQkFBeUI7O0lBQ3pCLFdBQW1COztNQUNqQixnQkFBZ0IsR0FBRyxFQUFFOztJQUN2QixlQUFvQjs7SUFDcEIsV0FBZ0M7O0lBQ2hDLGVBQW9EOztJQUNwRCxTQUFpQjs7SUFDakIsU0FBaUI7O0lBQ2pCLFNBQWlCOztJQUNqQixTQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUFFckIsTUFBTSxVQUFVLE1BQU0sQ0FBQyxRQUFvQyxFQUFFLElBQVksRUFBRSxHQUFXLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFDOUYsQ0FBYSxFQUFFLFNBQWMsRUFDN0IscUJBQStCLEVBQUUsTUFBZ0IsRUFBRSxxQkFBK0M7SUFDdkgsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztJQUN4RCxXQUFXLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDNUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDOUIsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUNyQixlQUFlLEdBQUcscUJBQXFCLENBQUM7O1VBRWxDLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVzs7VUFDekMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxZQUFZOztVQUMzQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVU7O1VBQ3ZDLFNBQVMsR0FBRyxlQUFlLENBQUMsU0FBUzs7VUFDckMsYUFBYSxHQUFHLEdBQUcsR0FBRyxTQUFTOztVQUMvQixnQkFBZ0IsR0FBRyxZQUFZLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxNQUFNO0lBRWhFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFO1FBQzVDLElBQUks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QUNmO0FBQ0gsQ0FBQzs7OztBQUVELFNBQVMsT0FBTztJQUNkLElBQUksU0FBUyxFQUFFO1FBQ2IsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pCLFNBQVMsR0FBRyxDQUFDLENBQUM7S0FDZjtBQUNILENBQUM7Ozs7QUFFRCxTQUFTLE9BQU87SUFDZCxJQUFJLFNBQVMsRUFBRTtRQUNiLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QixTQUFTLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHcmlkc3RlclJlc2l6ZUV2ZW50VHlwZX0gZnJvbSAnLi9ncmlkc3RlclJlc2l6ZUV2ZW50VHlwZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XHJcblxyXG5sZXQgc2Nyb2xsU2Vuc2l0aXZpdHk6IG51bWJlcjtcclxubGV0IHNjcm9sbFNwZWVkOiBudW1iZXI7XHJcbmNvbnN0IGludGVydmFsRHVyYXRpb24gPSA1MDtcclxubGV0IGdyaWRzdGVyRWxlbWVudDogYW55O1xyXG5sZXQgcmVzaXplRXZlbnQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbmxldCByZXNpemVFdmVudFR5cGU6IEdyaWRzdGVyUmVzaXplRXZlbnRUeXBlIHwgdW5kZWZpbmVkO1xyXG5sZXQgaW50ZXJ2YWxFOiBudW1iZXI7XHJcbmxldCBpbnRlcnZhbFc6IG51bWJlcjtcclxubGV0IGludGVydmFsTjogbnVtYmVyO1xyXG5sZXQgaW50ZXJ2YWxTOiBudW1iZXI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsKGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSwgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZTogTW91c2VFdmVudCwgbGFzdE1vdXNlOiBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlSXRlbVBvc2l0aW9uOiBGdW5jdGlvbiwgcmVzaXplPzogYm9vbGVhbiwgcmVzaXplRXZlbnRTY3JvbGxUeXBlPzogR3JpZHN0ZXJSZXNpemVFdmVudFR5cGUpIHtcclxuICBzY3JvbGxTZW5zaXRpdml0eSA9IGdyaWRzdGVyLiRvcHRpb25zLnNjcm9sbFNlbnNpdGl2aXR5O1xyXG4gIHNjcm9sbFNwZWVkID0gZ3JpZHN0ZXIuJG9wdGlvbnMuc2Nyb2xsU3BlZWQ7XHJcbiAgZ3JpZHN0ZXJFbGVtZW50ID0gZ3JpZHN0ZXIuZWw7XHJcbiAgcmVzaXplRXZlbnQgPSByZXNpemU7XHJcbiAgcmVzaXplRXZlbnRUeXBlID0gcmVzaXplRXZlbnRTY3JvbGxUeXBlO1xyXG5cclxuICBjb25zdCBvZmZzZXRXaWR0aCA9IGdyaWRzdGVyRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICBjb25zdCBvZmZzZXRIZWlnaHQgPSBncmlkc3RlckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gIGNvbnN0IG9mZnNldExlZnQgPSBncmlkc3RlckVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICBjb25zdCBvZmZzZXRUb3AgPSBncmlkc3RlckVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gIGNvbnN0IGVsZW1Ub3BPZmZzZXQgPSB0b3AgLSBvZmZzZXRUb3A7XHJcbiAgY29uc3QgZWxlbUJvdHRvbU9mZnNldCA9IG9mZnNldEhlaWdodCArIG9mZnNldFRvcCAtIHRvcCAtIGhlaWdodDtcclxuXHJcbiAgaWYgKCFncmlkc3Rlci4kb3B0aW9ucy5kaXNhYmxlU2Nyb2xsVmVydGljYWwpIHtcclxuICAgIGlmIChsYXN0TW91c2UuY2xpZW50WSA8IGUuY2xpZW50WSAmJiBlbGVtQm90dG9tT2Zmc2V0IDwgc2Nyb2xsU2Vuc2l0aXZpdHkpIHtcclxuICAgICAgY2FuY2VsTigpO1xyXG4gICAgICBpZiAoKHJlc2l6ZUV2ZW50ICYmIHJlc2l6ZUV2ZW50VHlwZSAmJiAhcmVzaXplRXZlbnRUeXBlLnMpIHx8IGludGVydmFsUykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpbnRlcnZhbFMgPSBzdGFydFZlcnRpY2FsKDEsIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbiwgbGFzdE1vdXNlKTtcclxuICAgIH0gZWxzZSBpZiAobGFzdE1vdXNlLmNsaWVudFkgPiBlLmNsaWVudFkgJiYgb2Zmc2V0VG9wID4gMCAmJiBlbGVtVG9wT2Zmc2V0IDwgc2Nyb2xsU2Vuc2l0aXZpdHkpIHtcclxuICAgICAgY2FuY2VsUygpO1xyXG4gICAgICBpZiAoKHJlc2l6ZUV2ZW50ICYmIHJlc2l6ZUV2ZW50VHlwZSAmJiAhcmVzaXplRXZlbnRUeXBlLm4pIHx8IGludGVydmFsTikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpbnRlcnZhbE4gPSBzdGFydFZlcnRpY2FsKC0xLCBjYWxjdWxhdGVJdGVtUG9zaXRpb24sIGxhc3RNb3VzZSk7XHJcbiAgICB9IGVsc2UgaWYgKGxhc3RNb3VzZS5jbGllbnRZICE9PSBlLmNsaWVudFkpIHtcclxuICAgICAgY2FuY2VsVmVydGljYWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGVsZW1SaWdodE9mZnNldCA9IG9mZnNldExlZnQgKyBvZmZzZXRXaWR0aCAtIGxlZnQgLSB3aWR0aDtcclxuICBjb25zdCBlbGVtTGVmdE9mZnNldCA9IGxlZnQgLSBvZmZzZXRMZWZ0O1xyXG5cclxuICBpZiAoIWdyaWRzdGVyLiRvcHRpb25zLmRpc2FibGVTY3JvbGxIb3Jpem9udGFsKSB7XHJcbiAgICBpZiAobGFzdE1vdXNlLmNsaWVudFggPCBlLmNsaWVudFggJiYgZWxlbVJpZ2h0T2Zmc2V0IDw9IHNjcm9sbFNlbnNpdGl2aXR5KSB7XHJcbiAgICAgIGNhbmNlbFcoKTtcclxuICAgICAgaWYgKChyZXNpemVFdmVudCAmJiByZXNpemVFdmVudFR5cGUgJiYgIXJlc2l6ZUV2ZW50VHlwZS5lKSB8fCBpbnRlcnZhbEUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaW50ZXJ2YWxFID0gc3RhcnRIb3Jpem9udGFsKDEsIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbiwgbGFzdE1vdXNlKTtcclxuICAgIH0gZWxzZSBpZiAobGFzdE1vdXNlLmNsaWVudFggPiBlLmNsaWVudFggJiYgb2Zmc2V0TGVmdCA+IDAgJiYgZWxlbUxlZnRPZmZzZXQgPCBzY3JvbGxTZW5zaXRpdml0eSkge1xyXG4gICAgICBjYW5jZWxFKCk7XHJcbiAgICAgIGlmICgocmVzaXplRXZlbnQgJiYgcmVzaXplRXZlbnRUeXBlICYmICFyZXNpemVFdmVudFR5cGUudykgfHwgaW50ZXJ2YWxXKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGludGVydmFsVyA9IHN0YXJ0SG9yaXpvbnRhbCgtMSwgY2FsY3VsYXRlSXRlbVBvc2l0aW9uLCBsYXN0TW91c2UpO1xyXG4gICAgfSBlbHNlIGlmIChsYXN0TW91c2UuY2xpZW50WCAhPT0gZS5jbGllbnRYKSB7XHJcbiAgICAgIGNhbmNlbEhvcml6b250YWwoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0VmVydGljYWwoc2lnbjogbnVtYmVyLCBjYWxjdWxhdGVJdGVtUG9zaXRpb246IEZ1bmN0aW9uLCBsYXN0TW91c2U6IGFueSk6IGFueSB7XHJcbiAgbGV0IGNsaWVudFkgPSBsYXN0TW91c2UuY2xpZW50WTtcclxuICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgaWYgKCFncmlkc3RlckVsZW1lbnQgfHwgc2lnbiA9PT0gLTEgJiYgZ3JpZHN0ZXJFbGVtZW50LnNjcm9sbFRvcCAtIHNjcm9sbFNwZWVkIDwgMCkge1xyXG4gICAgICBjYW5jZWxWZXJ0aWNhbCgpO1xyXG4gICAgfVxyXG4gICAgZ3JpZHN0ZXJFbGVtZW50LnNjcm9sbFRvcCArPSBzaWduICogc2Nyb2xsU3BlZWQ7XHJcbiAgICBjbGllbnRZICs9IHNpZ24gKiBzY3JvbGxTcGVlZDtcclxuICAgIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbih7Y2xpZW50WDogbGFzdE1vdXNlLmNsaWVudFgsIGNsaWVudFk6IGNsaWVudFl9KTtcclxuICB9LCBpbnRlcnZhbER1cmF0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRIb3Jpem9udGFsKHNpZ246IG51bWJlciwgY2FsY3VsYXRlSXRlbVBvc2l0aW9uOiBGdW5jdGlvbiwgbGFzdE1vdXNlOiBhbnkpOiBhbnkge1xyXG4gIGxldCBjbGllbnRYID0gbGFzdE1vdXNlLmNsaWVudFg7XHJcbiAgcmV0dXJuIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGlmICghZ3JpZHN0ZXJFbGVtZW50IHx8IHNpZ24gPT09IC0xICYmIGdyaWRzdGVyRWxlbWVudC5zY3JvbGxMZWZ0IC0gc2Nyb2xsU3BlZWQgPCAwKSB7XHJcbiAgICAgIGNhbmNlbEhvcml6b250YWwoKTtcclxuICAgIH1cclxuICAgIGdyaWRzdGVyRWxlbWVudC5zY3JvbGxMZWZ0ICs9IHNpZ24gKiBzY3JvbGxTcGVlZDtcclxuICAgIGNsaWVudFggKz0gc2lnbiAqIHNjcm9sbFNwZWVkO1xyXG4gICAgY2FsY3VsYXRlSXRlbVBvc2l0aW9uKHtjbGllbnRYOiBjbGllbnRYLCBjbGllbnRZOiBsYXN0TW91c2UuY2xpZW50WX0pO1xyXG4gIH0sIGludGVydmFsRHVyYXRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsU2Nyb2xsKCkge1xyXG4gIGNhbmNlbEhvcml6b250YWwoKTtcclxuICBjYW5jZWxWZXJ0aWNhbCgpO1xyXG4gIGdyaWRzdGVyRWxlbWVudCA9IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsSG9yaXpvbnRhbCgpIHtcclxuICBjYW5jZWxFKCk7XHJcbiAgY2FuY2VsVygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxWZXJ0aWNhbCgpIHtcclxuICBjYW5jZWxOKCk7XHJcbiAgY2FuY2VsUygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxFKCkge1xyXG4gIGlmIChpbnRlcnZhbEUpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxFKTtcclxuICAgIGludGVydmFsRSA9IDA7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxXKCkge1xyXG4gIGlmIChpbnRlcnZhbFcpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxXKTtcclxuICAgIGludGVydmFsVyA9IDA7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxTKCkge1xyXG4gIGlmIChpbnRlcnZhbFMpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxTKTtcclxuICAgIGludGVydmFsUyA9IDA7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxOKCkge1xyXG4gIGlmIChpbnRlcnZhbE4pIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxOKTtcclxuICAgIGludGVydmFsTiA9IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ==