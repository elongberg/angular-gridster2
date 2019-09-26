/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var scrollSensitivity;
/** @type {?} */
var scrollSpeed;
/** @type {?} */
var intervalDuration = 50;
/** @type {?} */
var gridsterElement;
/** @type {?} */
var resizeEvent;
/** @type {?} */
var resizeEventType;
/** @type {?} */
var intervalE;
/** @type {?} */
var intervalW;
/** @type {?} */
var intervalN;
/** @type {?} */
var intervalS;
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
    var offsetWidth = gridsterElement.offsetWidth;
    /** @type {?} */
    var offsetHeight = gridsterElement.offsetHeight;
    /** @type {?} */
    var offsetLeft = gridsterElement.scrollLeft;
    /** @type {?} */
    var offsetTop = gridsterElement.scrollTop;
    /** @type {?} */
    var elemTopOffset = top - offsetTop;
    /** @type {?} */
    var elemBottomOffset = offsetHeight + offsetTop - top - height;
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
    var elemRightOffset = offsetLeft + offsetWidth - left - width;
    /** @type {?} */
    var elemLeftOffset = left - offsetLeft;
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
    var clientY = lastMouse.clientY;
    return setInterval((/**
     * @return {?}
     */
    function () {
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
    var clientX = lastMouse.clientX;
    return setInterval((/**
     * @return {?}
     */
    function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJTY3JvbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzdGVyU2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7SUFHSSxpQkFBeUI7O0lBQ3pCLFdBQW1COztJQUNqQixnQkFBZ0IsR0FBRyxFQUFFOztJQUN2QixlQUFvQjs7SUFDcEIsV0FBZ0M7O0lBQ2hDLGVBQW9EOztJQUNwRCxTQUFpQjs7SUFDakIsU0FBaUI7O0lBQ2pCLFNBQWlCOztJQUNqQixTQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUFFckIsTUFBTSxVQUFVLE1BQU0sQ0FBQyxRQUFvQyxFQUFFLElBQVksRUFBRSxHQUFXLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFDOUYsQ0FBYSxFQUFFLFNBQWMsRUFDN0IscUJBQStCLEVBQUUsTUFBZ0IsRUFBRSxxQkFBK0M7SUFDdkgsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztJQUN4RCxXQUFXLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDNUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDOUIsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUNyQixlQUFlLEdBQUcscUJBQXFCLENBQUM7O1FBRWxDLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVzs7UUFDekMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxZQUFZOztRQUMzQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVU7O1FBQ3ZDLFNBQVMsR0FBRyxlQUFlLENBQUMsU0FBUzs7UUFDckMsYUFBYSxHQUFHLEdBQUcsR0FBRyxTQUFTOztRQUMvQixnQkFBZ0IsR0FBRyxZQUFZLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxNQUFNO0lBRWhFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFO1FBQzVDLElBQUks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RCxTQUFTLE9BQU87SUFDZCxJQUFJLFNBQVMsRUFBRTtRQUNiLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QixTQUFTLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7QUFDSCxDQUFDOzs7O0FBRUQsU0FBUyxPQUFPO0lBQ2QsSUFBSSxTQUFTLEVBQUU7UUFDYixhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekIsU0FBUyxHQUFHLENBQUMsQ0FBQztLQUNmO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R3JpZHN0ZXJSZXNpemVFdmVudFR5cGV9IGZyb20gJy4vZ3JpZHN0ZXJSZXNpemVFdmVudFR5cGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xyXG5cclxubGV0IHNjcm9sbFNlbnNpdGl2aXR5OiBudW1iZXI7XHJcbmxldCBzY3JvbGxTcGVlZDogbnVtYmVyO1xyXG5jb25zdCBpbnRlcnZhbER1cmF0aW9uID0gNTA7XHJcbmxldCBncmlkc3RlckVsZW1lbnQ6IGFueTtcclxubGV0IHJlc2l6ZUV2ZW50OiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG5sZXQgcmVzaXplRXZlbnRUeXBlOiBHcmlkc3RlclJlc2l6ZUV2ZW50VHlwZSB8IHVuZGVmaW5lZDtcclxubGV0IGludGVydmFsRTogbnVtYmVyO1xyXG5sZXQgaW50ZXJ2YWxXOiBudW1iZXI7XHJcbmxldCBpbnRlcnZhbE46IG51bWJlcjtcclxubGV0IGludGVydmFsUzogbnVtYmVyO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbChncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UsIGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGU6IE1vdXNlRXZlbnQsIGxhc3RNb3VzZTogYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbjogRnVuY3Rpb24sIHJlc2l6ZT86IGJvb2xlYW4sIHJlc2l6ZUV2ZW50U2Nyb2xsVHlwZT86IEdyaWRzdGVyUmVzaXplRXZlbnRUeXBlKSB7XHJcbiAgc2Nyb2xsU2Vuc2l0aXZpdHkgPSBncmlkc3Rlci4kb3B0aW9ucy5zY3JvbGxTZW5zaXRpdml0eTtcclxuICBzY3JvbGxTcGVlZCA9IGdyaWRzdGVyLiRvcHRpb25zLnNjcm9sbFNwZWVkO1xyXG4gIGdyaWRzdGVyRWxlbWVudCA9IGdyaWRzdGVyLmVsO1xyXG4gIHJlc2l6ZUV2ZW50ID0gcmVzaXplO1xyXG4gIHJlc2l6ZUV2ZW50VHlwZSA9IHJlc2l6ZUV2ZW50U2Nyb2xsVHlwZTtcclxuXHJcbiAgY29uc3Qgb2Zmc2V0V2lkdGggPSBncmlkc3RlckVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gZ3JpZHN0ZXJFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICBjb25zdCBvZmZzZXRMZWZ0ID0gZ3JpZHN0ZXJFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgY29uc3Qgb2Zmc2V0VG9wID0gZ3JpZHN0ZXJFbGVtZW50LnNjcm9sbFRvcDtcclxuICBjb25zdCBlbGVtVG9wT2Zmc2V0ID0gdG9wIC0gb2Zmc2V0VG9wO1xyXG4gIGNvbnN0IGVsZW1Cb3R0b21PZmZzZXQgPSBvZmZzZXRIZWlnaHQgKyBvZmZzZXRUb3AgLSB0b3AgLSBoZWlnaHQ7XHJcblxyXG4gIGlmICghZ3JpZHN0ZXIuJG9wdGlvbnMuZGlzYWJsZVNjcm9sbFZlcnRpY2FsKSB7XHJcbiAgICBpZiAobGFzdE1vdXNlLmNsaWVudFkgPCBlLmNsaWVudFkgJiYgZWxlbUJvdHRvbU9mZnNldCA8IHNjcm9sbFNlbnNpdGl2aXR5KSB7XHJcbiAgICAgIGNhbmNlbE4oKTtcclxuICAgICAgaWYgKChyZXNpemVFdmVudCAmJiByZXNpemVFdmVudFR5cGUgJiYgIXJlc2l6ZUV2ZW50VHlwZS5zKSB8fCBpbnRlcnZhbFMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaW50ZXJ2YWxTID0gc3RhcnRWZXJ0aWNhbCgxLCBjYWxjdWxhdGVJdGVtUG9zaXRpb24sIGxhc3RNb3VzZSk7XHJcbiAgICB9IGVsc2UgaWYgKGxhc3RNb3VzZS5jbGllbnRZID4gZS5jbGllbnRZICYmIG9mZnNldFRvcCA+IDAgJiYgZWxlbVRvcE9mZnNldCA8IHNjcm9sbFNlbnNpdGl2aXR5KSB7XHJcbiAgICAgIGNhbmNlbFMoKTtcclxuICAgICAgaWYgKChyZXNpemVFdmVudCAmJiByZXNpemVFdmVudFR5cGUgJiYgIXJlc2l6ZUV2ZW50VHlwZS5uKSB8fCBpbnRlcnZhbE4pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaW50ZXJ2YWxOID0gc3RhcnRWZXJ0aWNhbCgtMSwgY2FsY3VsYXRlSXRlbVBvc2l0aW9uLCBsYXN0TW91c2UpO1xyXG4gICAgfSBlbHNlIGlmIChsYXN0TW91c2UuY2xpZW50WSAhPT0gZS5jbGllbnRZKSB7XHJcbiAgICAgIGNhbmNlbFZlcnRpY2FsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBlbGVtUmlnaHRPZmZzZXQgPSBvZmZzZXRMZWZ0ICsgb2Zmc2V0V2lkdGggLSBsZWZ0IC0gd2lkdGg7XHJcbiAgY29uc3QgZWxlbUxlZnRPZmZzZXQgPSBsZWZ0IC0gb2Zmc2V0TGVmdDtcclxuXHJcbiAgaWYgKCFncmlkc3Rlci4kb3B0aW9ucy5kaXNhYmxlU2Nyb2xsSG9yaXpvbnRhbCkge1xyXG4gICAgaWYgKGxhc3RNb3VzZS5jbGllbnRYIDwgZS5jbGllbnRYICYmIGVsZW1SaWdodE9mZnNldCA8PSBzY3JvbGxTZW5zaXRpdml0eSkge1xyXG4gICAgICBjYW5jZWxXKCk7XHJcbiAgICAgIGlmICgocmVzaXplRXZlbnQgJiYgcmVzaXplRXZlbnRUeXBlICYmICFyZXNpemVFdmVudFR5cGUuZSkgfHwgaW50ZXJ2YWxFKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGludGVydmFsRSA9IHN0YXJ0SG9yaXpvbnRhbCgxLCBjYWxjdWxhdGVJdGVtUG9zaXRpb24sIGxhc3RNb3VzZSk7XHJcbiAgICB9IGVsc2UgaWYgKGxhc3RNb3VzZS5jbGllbnRYID4gZS5jbGllbnRYICYmIG9mZnNldExlZnQgPiAwICYmIGVsZW1MZWZ0T2Zmc2V0IDwgc2Nyb2xsU2Vuc2l0aXZpdHkpIHtcclxuICAgICAgY2FuY2VsRSgpO1xyXG4gICAgICBpZiAoKHJlc2l6ZUV2ZW50ICYmIHJlc2l6ZUV2ZW50VHlwZSAmJiAhcmVzaXplRXZlbnRUeXBlLncpIHx8IGludGVydmFsVykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpbnRlcnZhbFcgPSBzdGFydEhvcml6b250YWwoLTEsIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbiwgbGFzdE1vdXNlKTtcclxuICAgIH0gZWxzZSBpZiAobGFzdE1vdXNlLmNsaWVudFggIT09IGUuY2xpZW50WCkge1xyXG4gICAgICBjYW5jZWxIb3Jpem9udGFsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydFZlcnRpY2FsKHNpZ246IG51bWJlciwgY2FsY3VsYXRlSXRlbVBvc2l0aW9uOiBGdW5jdGlvbiwgbGFzdE1vdXNlOiBhbnkpOiBhbnkge1xyXG4gIGxldCBjbGllbnRZID0gbGFzdE1vdXNlLmNsaWVudFk7XHJcbiAgcmV0dXJuIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGlmICghZ3JpZHN0ZXJFbGVtZW50IHx8IHNpZ24gPT09IC0xICYmIGdyaWRzdGVyRWxlbWVudC5zY3JvbGxUb3AgLSBzY3JvbGxTcGVlZCA8IDApIHtcclxuICAgICAgY2FuY2VsVmVydGljYWwoKTtcclxuICAgIH1cclxuICAgIGdyaWRzdGVyRWxlbWVudC5zY3JvbGxUb3AgKz0gc2lnbiAqIHNjcm9sbFNwZWVkO1xyXG4gICAgY2xpZW50WSArPSBzaWduICogc2Nyb2xsU3BlZWQ7XHJcbiAgICBjYWxjdWxhdGVJdGVtUG9zaXRpb24oe2NsaWVudFg6IGxhc3RNb3VzZS5jbGllbnRYLCBjbGllbnRZOiBjbGllbnRZfSk7XHJcbiAgfSwgaW50ZXJ2YWxEdXJhdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0SG9yaXpvbnRhbChzaWduOiBudW1iZXIsIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbjogRnVuY3Rpb24sIGxhc3RNb3VzZTogYW55KTogYW55IHtcclxuICBsZXQgY2xpZW50WCA9IGxhc3RNb3VzZS5jbGllbnRYO1xyXG4gIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBpZiAoIWdyaWRzdGVyRWxlbWVudCB8fCBzaWduID09PSAtMSAmJiBncmlkc3RlckVsZW1lbnQuc2Nyb2xsTGVmdCAtIHNjcm9sbFNwZWVkIDwgMCkge1xyXG4gICAgICBjYW5jZWxIb3Jpem9udGFsKCk7XHJcbiAgICB9XHJcbiAgICBncmlkc3RlckVsZW1lbnQuc2Nyb2xsTGVmdCArPSBzaWduICogc2Nyb2xsU3BlZWQ7XHJcbiAgICBjbGllbnRYICs9IHNpZ24gKiBzY3JvbGxTcGVlZDtcclxuICAgIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbih7Y2xpZW50WDogY2xpZW50WCwgY2xpZW50WTogbGFzdE1vdXNlLmNsaWVudFl9KTtcclxuICB9LCBpbnRlcnZhbER1cmF0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbFNjcm9sbCgpIHtcclxuICBjYW5jZWxIb3Jpem9udGFsKCk7XHJcbiAgY2FuY2VsVmVydGljYWwoKTtcclxuICBncmlkc3RlckVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbEhvcml6b250YWwoKSB7XHJcbiAgY2FuY2VsRSgpO1xyXG4gIGNhbmNlbFcoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsVmVydGljYWwoKSB7XHJcbiAgY2FuY2VsTigpO1xyXG4gIGNhbmNlbFMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsRSgpIHtcclxuICBpZiAoaW50ZXJ2YWxFKSB7XHJcbiAgICBjbGVhckludGVydmFsKGludGVydmFsRSk7XHJcbiAgICBpbnRlcnZhbEUgPSAwO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsVygpIHtcclxuICBpZiAoaW50ZXJ2YWxXKSB7XHJcbiAgICBjbGVhckludGVydmFsKGludGVydmFsVyk7XHJcbiAgICBpbnRlcnZhbFcgPSAwO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsUygpIHtcclxuICBpZiAoaW50ZXJ2YWxTKSB7XHJcbiAgICBjbGVhckludGVydmFsKGludGVydmFsUyk7XHJcbiAgICBpbnRlcnZhbFMgPSAwO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsTigpIHtcclxuICBpZiAoaW50ZXJ2YWxOKSB7XHJcbiAgICBjbGVhckludGVydmFsKGludGVydmFsTik7XHJcbiAgICBpbnRlcnZhbE4gPSAwO1xyXG4gIH1cclxufVxyXG4iXX0=