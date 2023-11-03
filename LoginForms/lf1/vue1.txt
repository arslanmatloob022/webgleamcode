<template>
  <div class="form_container">
    <i class="uil uil-times form_close" @click="closeForm"></i>
    <!-- Login From -->
    <div v-if="showLoginForm" class="form login_form">
      <form action="#">
        <h2>Login</h2>
        <div class="input_box">
          <input type="email" placeholder="Enter your email" required />
          <i class="uil uil-envelope-alt email"></i>
        </div>
        <div class="input_box">
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
            :class="{ 'uil-eye': showPassword, 'uil-eye-slash': !showPassword }"
          ></i>
        </div>
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
          <a @click="toggleForms">Register Now !</a>
        </div>
      </form>
    </div>

    <!-- Signup From -->
    <div v-if="showSignupForm" class="form signup_form">
      <form action="#">
        <h2>Register Now</h2>
        <div class="input_box">
          <input type="text" placeholder="Enter your Name" required />
          <i class="uil uil-user email"></i>
        </div>
        <div class="input_box">
          <input type="email" placeholder="Enter your email" required />
          <i class="uil uil-envelope-alt email"></i>
        </div>
        <div class="input_box">
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
            :class="{ 'uil-eye': showPassword, 'uil-eye-slash': !showPassword }"
          ></i>
        </div>
        <button class="button">Register</button>
        <div class="signupBtn">
          <p>Already Have an Account?</p>
          <a @click="toggleForms">Login Now!</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstLoginForm",

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
.signupBtn {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 5px;
}
.signupBtn p {
  cursor: default;
  font-size: 0.7rem;
  color: rgba(18, 216, 121, 1);
}
.signupBtn a {
  cursor: pointer;
}
.form_container {
  position: fixed;
  max-width: 320px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 101;
  background: #0f0a0a;
  padding: 25px;
  border-radius: 28px 0px;
  border: 2px solid black;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1);
  /*opacity: 0;
  pointer-events: none;*/
  transition: all 0.4s ease-out;
}
.form_close {
  position: absolute;
  padding: 4px;
  top: 10px;
  right: 20px;
  color: rgba(18, 216, 121, 1);
  font-size: 22px;
  opacity: 0.8;
  cursor: pointer;
}
.form_close:hover {
  border-radius: 5px 0px;
  background-color: rgba(18, 216, 121, 0.6);
  color: white;
  opacity: 1;
  cursor: pointer;
}
.form_container h2 {
  font-size: 22px;
  color: rgba(18, 216, 121, 1);
  text-align: center;
}
.input_box {
  position: relative;
  box-sizing: border-box;
  margin-top: 30px;
  width: 100%;
  height: 40px;
}
.input_box input {
  box-sizing: border-box;
  position: absolute;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 0 30px;
  background-color: #0f0a0a;
  color: rgb(236, 228, 228);
  transition: all 0.2s ease;
  border-bottom: 1.5px solid #aaaaaa;
}
.input_box input:focus {
  border-color: rgba(18, 216, 121, 1);
}
.input_box i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: rgba(18, 216, 121, 1);
}
.input_box i.email,
.input_box i.password {
  left: 0;
}
.input_box input:focus ~ i.email,
.input_box input:focus ~ i.password {
  color: rgba(18, 216, 121, 1);
}
.input_box i.pw_hide {
  color: rgba(18, 216, 121, 1);
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
  color: rgba(18, 216, 121, 1);
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
  accent-color: rgba(18, 216, 121, 1);
}
.checkbox label {
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  color: rgba(18, 216, 121, 1);
}
.form_container .button {
  background: #0f0a0a;
  border: 2px solid rgba(18, 216, 121, 1);
  margin-top: 30px;
  width: 100%;
  padding: 7px 0;
  border-radius: 10px 0px;
  color: rgba(18, 216, 121, 1);
  font-size: 16px;
  cursor: pointer;
}

.login_signup {
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  color: rgba(18, 216, 121, 1);
}
</style>
<!-- 

  .signup_form {
  justify-content: center;
  align-items: center;
  display: none;
}

.signup_form .active {
  display: block;
}
 -->
