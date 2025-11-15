window.addEventListener('DOMContentLoaded', () => {
    const cardName = document.getElementById('cardName');
    const cardNumber = document.getElementById('cardNumber');
    const expDate = document.getElementById('expDate');
    const cvv = document.getElementById('cvv');
    const cardImage = document.getElementById('card-image');

    const previewName = document.getElementById('preview-name');
    const previewNumber = document.getElementById('preview-number');
    const previewExp = document.getElementById('preview-exp');

    const form = document.getElementById('payment-form');
    const formMessage = document.getElementById('formMessage');

    cardName.addEventListener('input', () => {
        previewName.textContent = cardName.value.trim() || 'Nombre Apellido';
    });

    cardNumber.addEventListener('input', (e) => {
        let value = cardNumber.value.replace(/[^0-9]/g, '');
        if (value.length > 16) value = value.slice(0, 16);
        const parts = [];
        for (let i = 0; i < value.length; i += 4) parts.push(value.substring(i, i + 4));
        const formatted = parts.join(' ');
        cardNumber.value = formatted;
        previewNumber.textContent = formatted || '0000 0000 0000 0000';
    });

    expDate.addEventListener('input', (e) => {
        let v = expDate.value.replace(/[^0-9]/g, '');
        if (v.length > 4) v = v.slice(0, 4);
        if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
        expDate.value = v;
        previewExp.textContent = v || 'MM/YY';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();
        formMessage.textContent = '';
        const valid = validateForm();
        if (valid) {
            formMessage.style.color = 'green';
            formMessage.textContent = 'Formulario válido — listo para procesar.';
        } else {
            formMessage.style.color = '#c0392b';
            formMessage.textContent = 'Corrige los errores antes de continuar.';
        }
    });

    function clearErrors() {
        ['err-name', 'err-number', 'err-exp', 'err-cvv'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '';
        });
    }

    function validateForm() {
        let ok = true;
        const name = cardName.value.trim();
        const number = cardNumber.value.replace(/\s+/g, '');
        const exp = expDate.value.trim();
        const cv = cvv.value.trim();

        if (!name) {
            document.getElementById('err-name').textContent = 'El nombre es obligatorio.';
            ok = false;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) {
            document.getElementById('err-name').textContent = 'El nombre solo puede contener letras y espacios.';
            ok = false;
        }

        if (!/^\d{16}$/.test(number)) {
            document.getElementById('err-number').textContent = 'Número de tarjeta inválido (16 dígitos).';
            ok = false;
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(exp)) {
            document.getElementById('err-exp').textContent = 'Formato inválido. Usa MM/YY.';
            ok = false;
        } else {
            const parts = exp.split('/');
            const m = parseInt(parts[0], 10);
            const y = parseInt(parts[1], 10) + 2000;
            const now = new Date();
            const lastDay = new Date(y, m, 0);
            if (lastDay < now) {
                document.getElementById('err-exp').textContent = 'La tarjeta está vencida.';
                ok = false;
            }
        }

        if (!/^\d{3,4}$/.test(cv)) {
            document.getElementById('err-cvv').textContent = 'CVV inválido (3 o 4 dígitos).';
            ok = false;
        }

        return ok;
    }
});
