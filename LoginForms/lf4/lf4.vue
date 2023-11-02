<template>
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
  />
  <div class="form_container">
    <div class="formHeader"></div>
    <i class="uil uil-power form_close" @click="closeForm"></i>
    <!-- Login From -->
    <div v-if="showLoginForm" class="form login_form">
      <form action="#">
        <div class="table-head">
          <h2>Login</h2>
        </div>
        <div class="input_box max-margin">
          <input type="email" placeholder="Enter your email" required />
          <i class="uil uil-envelope-alt email"></i>
        </div>
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
          <a @click="toggleForms">Register Now!</a>
        </div>
        <div class="social-login">
          <div class="social-icons">
            <i class="uil uil-facebook socials"></i>
            <p>login with</p>
          </div>
          <div class="social-icons">
            <i class="uil uil-google socials"></i>
            <p>login with</p>
          </div>
          <div class="social-icons">
            <i class="uil uil-twitter socials"></i>
            <p>login with</p>
          </div>
        </div>
      </form>
    </div>

    <!-- Signup From -->
    <div v-if="showSignupForm" class="form signup_form row">
      <form action="#">
        <div class="table-head">
          <h2>Register Now</h2>
        </div>

        <div class="input-boxes light-margin">
          <div class="input_box signuppwd">
            <input type="text" placeholder="Firstname" required />
            <i class="uil uil-user email"></i>
          </div>
          <div class="input_box signuppwd">
            <input type="text" placeholder="Secondname" required />
            <i class="uil uil-user email"></i>
          </div>
        </div>

        <div class="input-boxes light-margin">
          <div class="input_box">
            <input type="email" placeholder="Email" required />
            <i class="uil uil-envelope-alt email"></i>
          </div>
        </div>

        <div class="input-boxes light-margin">
          <div class="input_box">
            <input type="text" placeholder="Full Address" required />
            <i class="uil uil-bag-alt email"></i>
          </div>
        </div>

        <div class="input-boxes light-margin">
          <div class="input_box signuppwd">
            <input
              type="password"
              class="password"
              placeholder="Enter  password"
              require
            />
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

          <div class="input_box signuppwd">
            <input
              type="password"
              class="password"
              placeholder="Enter  password"
              require
            />
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
        </div>

        <button class="button">Register</button>
        <div class="signupBtn">
          <p>Already Have an Account?</p>
          <a @click="toggleForms">Login Now!</a>
        </div>
        <div class="social-login">
          <div class="social-icons">
            <i class="uil uil-facebook socials"></i>
            <p>Signup with</p>
          </div>
          <div class="social-icons">
            <i class="uil uil-google socials"></i>
            <p>Signup with</p>
          </div>
          <div class="social-icons">
            <i class="uil uil-twitter socials"></i>
            <p>Signup with</p>
          </div>
        </div>
      </form>
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
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 1000;
  padding: 16px;
  border-radius: 6px;
  background-image: -webkit-linear-gradient(90deg, #ffffff 30%, #303ce2 70%);
  border: none;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-out;
}
form {
  background-color: transparent;
  padding: 16px;
  border: none;
}
.form_close {
  position: absolute;
  padding: 0px 4px;
  border: none;
  border-radius: 50%;
  top: 4px;
  color: #303ce2;
  right: 4px;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
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
  width: 260px;
  flex-grow: 1;
}
.input_box input,
select {
  box-sizing: border-box;
  position: absolute;
  height: 100%;
  width: 100%;
  outline: none;
  padding: 1px 30px;
  background-color: #ffffff;
  color: rgb(41, 41, 41);
  transition: 0.2s ease;
  border: 1.5px solid #dbdbdb;
  border-radius: 6px;
}
.light-margin {
  margin-top: 14px;
}
.max-margin {
  margin-top: 25px;
}
.input_box input:focus {
  border-color: #303ce2;
}
.signuppwd {
  max-width: 180px;
}
.input_box i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #303ce2;
  margin: 0px 6px;
}
.input_box i.email,
.input_box i.password {
  left: 0;
}
.input_box input:focus ~ i.email,
.input_box input:focus ~ i.password {
  color: #303ce2;
}
.input_box i.pw_hide {
  color: #303ce2;
  right: 0;
  font-size: 18px;
  cursor: pointer;
}

.input-boxes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
  color: #303ce2;
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
  accent-color: #303ce2;
}
.checkbox label {
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  color: #303ce2;
}

.form_container .button {
  background: #303ce2;
  border: none;
  margin-top: 20px;
  width: 100%;
  padding: 7px 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
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
  color: #303ce2;
}
.signupBtn a {
  cursor: pointer;
}

.login_signup {
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  color: #303ce2;
}
.social-login {
  margin: 10px 0px;
  display: flex;
  justify-content: space-evenly;
}
.social-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.social-icons p {
  font-size: 0.7rem;
  color: #303ce2;
}
.social-icons i {
  cursor: pointer;
  font-size: 1.7rem;
  box-shadow: 0px 0px 6px 0px #303ce2;
  border-radius: 50%;
  padding: 0px 6px;
  transition: all 0.2s ease-in-out;
  color: #303ce2;
}
.social-icons i:hover {
  translate: scale(1.01);
  box-shadow: 0px 3px 6px 0px #e23030;
  color: #e23030;
}

@media screen and (max-width: 670px) {
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
    width: 100%;
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
}
</style>
