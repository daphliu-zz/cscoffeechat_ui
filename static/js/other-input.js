// @ts-check

/**
 *
 * @param {HTMLInputElement} input
 */
function toggleOtherText(input) {
    if (
        input.matches('.field__radio--text .field__input') &&
        input.nextElementSibling
    ) {
        const otherTextInput = /** @type {HTMLInputElement} */ (input.nextElementSibling);
        otherTextInput.disabled = !input.checked;
    } else if (input.type === 'radio') {
        const parent = input.closest('.field');
        const withText = parent.querySelectorAll(
            '.field__radio--text .field__input'
        );
        withText.forEach(toggleOtherText);
    }
}

/**
 * @param {HTMLFormElement} form
 */
export function setupOtherText(form) {
    form.addEventListener('change', evt => {
        const input = /** @type {HTMLInputElement} */ (evt.target);
        toggleOtherText(input);
    })
}

setupOtherText(document.querySelector('form'));
