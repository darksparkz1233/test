<template>
    <div class="container">
        <form>
            <div class="input-col">
                <!-- First Name -->
                <p class="input-name">First name</p>
                <input type="text">
                <div class="underline"></div>
                <!-- Nationality -->
                <p class="input-name">Nationality</p>
                    
                <div class="select-btn nationality-input">
                    <span>American</span>
                    <img src="../assets/down-arrow.svg" alt="dropdown">
                </div>
            </div>

            <div class="input-col">
                <!-- Last Name: -->
                <p class="input-name">Last name</p>
                <input type="text">
                <div class="underline"></div>
                <!-- Email: -->
                <p class="input-name">E-mail</p>
                <input type="email">
                <div class="underline"></div>
            </div>

            <div class="input-col">
                <!-- Date of Birth -->
                <p class="input-name">Date of Birth</p>
                <div class="birthdate-container">
                    <!-- Day -->
                    <div>
                        <div class="select-btn day">
                            <span>21</span>
                            <img src="../assets/down-arrow.svg" alt="dropdown">
                        </div>
                    </div>
                    <!-- Month -->
                    <div>
                        <div class="select-btn month">
                            <span>December</span>
                            <img src="../assets/down-arrow.svg" alt="" srcset="">
                        </div>
                        <div class="select-content">

                        </div>
                    </div>
                    <!-- Year -->
                    <div>
                        <div class="select-btn year">
                            <span>1995</span>
                            <img src="../assets/down-arrow.svg" alt="" srcset="">
                        </div>
                        <div class="select-content">

                        </div>
                    </div>
                </div>

                <!-- Password -->
                <p class="input-name">Password</p>
                <input type="password">
                <div class="underline"></div>
            </div>

            <div class="input-col">
                <!-- Gender -->
                <p class="input-name gender">Gender</p>

                <div class="gender-inputs">
                    <!-- Male -->
                    <div class="input-male">
                        <input name="gender" type="radio"> Male
                    </div>
                    <!-- Female -->
                    <div class="input-female">
                        <input name="gender" type="radio"> Female
                    </div>
                </div>

                <!-- Confirm password -->
                <p class="input-name">Confirm password</p>
                <input type="password">
                <div class="underline"></div>
            </div>
        </form>
    </div>
</template>

<style scoped>
form {
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap: 0.94rem;
}

.input-name {
    width: 14rem;
    margin-top: 1rem;
    color: #7C7C7C;
    font-size: 0.75rem;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;

    padding-bottom: 0.33rem;
}

.input-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

input,
.input-male,
.input-female {
    outline: none;
    border: none;
    background: none;
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    padding: 0;
    
}


input[type='radio'] {
    outline: none;
}

/* Nationality input */
.nationality-input {
    height: 10rem;
}
.nationality {
    
}

/** Date of Birth section 
 * 
 * 
*/
.birthdate-container {
    display: flex;
    gap: 0.61rem;
}

.birthdate-container select {

}

.select-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    border-bottom: 1px #F2F2F2 solid;

    height: 1.43rem;

}

.day {
    width: 3.5rem;
    
}

.month {
    width: 5.6875rem;
}

.year {
    width: 4.25rem;
}

/** End of Date of Birth section
 * 
 * 
 */
.input-col {
    width: 14.65625rem;
}

/* Gray underline for input fields */
.underline {
    background: #F2F2F2;
    height: 1px;
    width: 14.65625rem;
}

/* Radio buttons for gender selection */
.gender-inputs {
    display: flex;
    font-size: 0.875rem;
    gap: 1.19rem;
}
.gender {
}
</style>

