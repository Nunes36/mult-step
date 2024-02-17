//mudança de página

let currentStep = 1;

const showStep = () => {
    const steps = document.querySelectorAll(".step");
    steps.forEach((stepElement) => {
        stepElement.style.display = 'none'
    })

    const currentStepElement = document.querySelector(`#steps_${currentStep}`);
        if(currentStepElement) {
            currentStepElement.style.display = "flex";
        }
}


const nextStep = () => {
    if(validaStep(currentStep))
    currentStep++;
    showStep();
}

const prevStep = () => {
    currentStep--;
    showStep();
}

document.addEventListener('DOMContentLoaded', () => {
    const btnNext = document.querySelector("#next_stop");
    if(btnNext) {
        btnNext.addEventListener("click", (evt) => {
            evt.preventDefault();
            nextStep();
        });
    }
    showStep();
});

const validaStep = (step) => {
    const erro = document.querySelector(".error");
    let isValid = true;

    // Verifica se todos os campos estão preenchidos
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;

    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
        erro.textContent = "This fild is required.";
        erro.style.display = "block";
        return false; // Retorna false se algum campo estiver vazio
    }

    if (step === 1) {
        const regexName = /^[a-zA-ZÀ-ÿ']+( [a-zA-ZÀ-ÿ']+)*/;
        if (!regexName.test(name)) {
            erro.textContent = "This fild is required";
            erro.style.display = "block";
            isValid = false;
        } else {
            erro.style.display = "none";
        }
    } else if (step === 2) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            erro.textContent = "This fild is required";
            erro.style.display = "block";
            isValid = false;
        } else {
            erro.style.display = "none";
        }
    } else if (step === 3) {
        const regexPhone = /^\d{10}$/;
        if (!regexPhone.test(phone)) {
            erro.textContent = "This fild is required";
            erro.style.display = "block";
            isValid = false;
        } else {
            erro.style.display = "none";
        }
    }

    return isValid;
}






// const name = [document.querySelector("#name")];
// const email = [document.querySelector("#email")];
// const number = [document.querySelector("#phone")];
// const btnNext = document.querySelector("#next_stop");
// const valida = document.querySelector("#steps_1");

// valida.addEventListener("submit", (evt) => {
//     evt.preventDefault();
// });



