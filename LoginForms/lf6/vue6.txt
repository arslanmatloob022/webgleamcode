<template>
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
  />
  <div class="form_container">
    <div class="formHeader"></div>
    <i class="uil uil-multiply form_close" @click="closeForm"></i>
    <!-- Login From -->
    <div v-if="showLoginForm" class="form forms">
      <form action="submit">
        <div class="table-head">
          <h2>Login</h2>
        </div>
        <fieldset class="fieldset">
          <legend>Email</legend>
          <div class="input_box max-margin">
            <input id="email" type="email" placeholder="Enter Email" required />
            <i class="uil uil-envelope-alt email"></i>
          </div>
        </fieldset>

        <fieldset class="fieldset">
          <legend>Password</legend>
          <div class="input_box max-margin">
            <input
              type="password"
              class="password"
              placeholder="Enter your password"
              required
            />
            <i class="uil uil-lock password"></i>
            <i
              @click="togglePassword"
              class="icon pw_hide"
              :class="{
                'uil-eye': showPassword,
                'uil-eye-slash': !showPassword,
              }"
            ></i>
          </div>
        </fieldset>

        <div class="option_field">
          <span class="checkbox">
            <input type="checkbox" id="check" />
            <label for="check">Remember me</label>
          </span>
          <a href="#" id="forgetpswrd" class="forgot_pw">Forgot password?</a>
        </div>

        <button class="button">Login</button>
        <div class="signupBtn">
          <p>Don't Have Account?</p>
          <a @click="toggleForms">Register Now!</a>
        </div>
      </form>

      <div class="content">
        <div class="table-head blue">
          <h2>We Offer</h2>
        </div>
        <div class="text-content">
          <p>
            List of free login forms with a modern trendy design. Use these
            responsive login forms .
          </p>
        </div>

        <button class="social-button google">
          Login with Google <span><i class="uil uil-google"></i></span>
        </button>
        <button class="social-button facebook">
          Login with Facebook <span><i class="uil uil-facebook"></i></span>
        </button>
        <button class="social-button twitter">
          Login with Twitter <span><i class="uil uil-twitter"></i></span>
        </button>
      </div>
    </div>

    <!-- Signup From -->
    <div v-if="showSignupForm" class="form forms">
      <form action="#">
        <div class="table-head">
          <h2>Signup</h2>
        </div>

        <fieldset class="fieldset">
          <legend>Full-Name</legend>
          <div class="input_box light-margin">
            <input type="text" placeholder="Firstname" required />
            <i class="uil uil-user email"></i>
          </div>
        </fieldset>

        <fieldset class="fieldset">
          <legend>Email</legend>
          <div class="input_box light-margin">
            <input type="email" placeholder="Email" required />
            <i class="uil uil-envelope-alt email"></i>
          </div>
        </fieldset>

        <fieldset class="fieldset">
          <legend>Password</legend>
          <div class="input_box light-margin">
            <input
              type="password"
              class="password"
              placeholder="Enter  password"
              require
            />

            <i class="uil uil-lock password"></i>
            <i
              @click="togglePassword"
              class="icon pw_hide"
              :class="{
                'uil-eye': showPassword,
                'uil-eye-slash': !showPassword,
              }"
            ></i>
          </div>
        </fieldset>

        <button class="button">Register</button>
        <div class="signupBtn">
          <p>Already Have an Account?</p>
          <a @click="toggleForms">Login Now!</a>
        </div>
      </form>
      <div class="content">
        <div class="table-head blue">
          <h2>We offers</h2>
        </div>
        <div class="text-content">
          <p>
            List of free login forms with a modern trendy design. Use these
            responsive login forms .
          </p>
        </div>
        <button class="social-button google">
          Login with Google <span><i class="uil uil-google"></i></span>
        </button>
        <button class="social-button facebook">
          Login with Facebook <span><i class="uil uil-facebook"></i></span>
        </button>
        <button class="social-button google">
          Login with Twitter <span><i class="uil uil-twitter"></i></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",

  data() {
    return {
      showLoginForm: true,
      showSignupForm: false,
      showPassword: false,
    };
  },
  components: {},
  methods: {
    closeForm() {
      this.$emit("closeLoginForm");
    },
    togglePassword() {
      let pswrd = document.querySelector(".password");
      this.showPassword = !this.showPassword;
      if (this.showPassword) {
        pswrd.type = "text";
      } else {
        pswrd.type = "password";
      }
    },
    toggleForms() {
      if (this.showLoginForm) {
        this.showLoginForm = false;
        this.showSignupForm = true;
      } else {
        this.showSignupForm = false;
        this.showLoginForm = true;
      }
    },
  },
};
</script>

<style scoped>
.form_container {
  position: fixed;
  width: max-content;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: row;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 1000;
  background-image: -webkit-linear-gradient(180deg, #ffffff 50%, #0010f4 50%);
  padding: 10px;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-out;
}
form {
  padding: 16px;
  border: none;
}
.forms {
  display: flex;
  gap: 30px;
}

.form_close {
  position: absolute;
  padding: 1px 5px;
  border: none;
  border-radius: 4px;
  top: 8px;
  right: 8px;
  color: #fff;
  background-color: #315ef3;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.25s, opacity 0.25s;
}
.form_close:hover {
  transform: rotate(90deg);
}

.form_container h2 {
  font-size: 22px;
  text-align: center;
  color: #ffffff;
}

.input_box {
  position: relative;
  box-sizing: border-box;
  height: 40px;
  width: 240px;
  flex-grow: 1;
}
.input_box input {
  box-sizing: border-box;
  position: absolute;
  outline: none;
  height: 100%;
  width: 100%;
  padding: 1px 30px;
  border: none;
  background-color: transparent;
  color: #f9f9f9;
  transition: 0.2s ease;
  border-radius: 4px;
}
.input_box input::placeholder {
  color: #ffffff;
}
.input_box input:active {
  background-color: transparent;
}
.light-margin {
  margin-top: -7px;
}
.max-margin {
  margin-top: -7px;
}

.input_box i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #ffffff;
  margin: 0px 6px;
}
.input_box i.email,
.input_box i.password {
  left: 0;
}
.input_box input:focus ~ i.email,
.input_box input:focus ~ i.password {
  color: #ffffff;
}
.input_box i.pw_hide {
  color: #ffffff;
  right: 0;
  font-size: 18px;
  cursor: pointer;
}

/* Options or Links*/
.option_field {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form_container a {
  text-decoration: none;
  color: #ffffff;
  font-size: 12px;
}
.form_container a:hover {
  text-decoration: underline;
}

.checkbox {
  display: flex;
  column-gap: 8px;
  white-space: nowrap;
}
.checkbox input {
  accent-color: #ffffff;
}
.checkbox label {
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  color: #ffffff;
}

.form_container .button {
  background: #ffffff;
  border: none;
  margin-top: 20px;
  width: 100%;
  padding: 7px 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  color: #0010f4;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.form_container .button:hover {
  opacity: 1;
  transform: scale(1.02);
}
.signupBtn {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 5px;
}
.signupBtn p {
  cursor: default;
  font-size: 0.7rem;
  color: #ffffff;
}
.signupBtn a {
  cursor: pointer;
}

.login_signup {
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  color: #ffffff;
}

.content {
  padding: 16px 6px;
  top: 120px;
  width: 100%;
  width: 240px;
}
h1 {
  color: #323ddb;
  text-align: center;
}
.text-content {
  padding: 6px;
}
.blue h2 {
  color: #0010f4;
}
.text-content p {
  text-align: center;
  color: #2934d8;
  font-size: 1rem;
}
.social-button {
  padding: 8px 0px;
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  width: 100%;
  border: 1px solid #0010f4;
  color: #244fdb;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
}
.social-button:hover {
  transform: scale(1.03);
}
.google i {
  font-size: 1rem;
  padding: 2px 2px;
  border-radius: 50%;
}
.twitter i {
  color: #315ef3;
  padding: 2px 3px;
} /*
fieldset {
  margin-top: 10px;
  border-radius: 6px;
  border: 1px solid #ffffff;
}
legend {
  color: #ffffff;
  font-size: 0.8rem;
}*/

.fieldset {
  margin-top: 10px;
  border: 1px solid #fff;
  border-top: 1px solid #fff;
  border-color: #ffffff;
  border-radius: 6px;
}
legend {
  color: #ffffff;
  font-size: 0.8rem;
}
@media screen and (max-width: 670px) {
  .form_close {
    z-index: 1000;
  }
  .form_container {
    background-image: -webkit-linear-gradient(90deg, #ffffff 50%, #0010f4 50%);
  }
  .form_container h2 {
    font-size: 22px;
    text-align: center;
    color: #ffffff;
  }
  .forms {
    flex-direction: column;
    gap: 6px;
  }
  .input-boxes {
    flex-direction: column;
    gap: 0;
  }
  .input_box {
    margin-top: 6px;
    height: 30px;
    width: 260px;
  }
  .signuppwd {
    max-width: 260px;
  }
  .input_box input,
  select {
    color: rgb(41, 41, 41);
    transition: all 0.2s ease-in-out;
  }
  .input_box i,
  .pwd {
    font-size: 16px;
  }
  .form_container .button {
    margin-top: 10px;
    padding: 5px 0;
    font-size: 0.8rem;
  }
  .light-margin {
    margin-top: 0;
  }
  .social-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .social-icons p {
    font-size: 0.5rem;
  }
  .social-icons i {
    font-size: 1.2rem;
    padding: 3px 5px;
  }
  .social-icons i:hover {
    translate: scale(1.01);
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 120px;
    padding: 0px 12px;
  }
  .tag {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 1rem;
  }
  .text-content {
    padding: 6px;
  }
  .text-content p {
    font-size: 0.8rem;
  }
  fieldset {
    padding: 5px 0px;
    border-radius: 3px;
  }
  legend {
    font-size: 0.6rem;
  }
}
</style>
