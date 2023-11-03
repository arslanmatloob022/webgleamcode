<template>
  <div class="form_container">
    <div class="formHeader"></div>
    <i class="uil uil-multiply form_close" @click="closeForm"></i>
    <!-- Login From -->
    <div v-if="showLoginForm" class="form forms">
      <form action="submit">
        <div class="table-head">
          <h2>Login</h2>
        </div>
        <div class="input_box max-margin">
          <input id="email" type="email" placeholder="Enter Email" required />

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
      </form>

      <div class="content">
        <div class="table-head tag">
          <h1>Your Shop</h1>
        </div>
        <div class="text-content">
          <p>
            By login stay connected, Track your order and browse more and new
            items.!
          </p>
        </div>

        <fieldset class="social-login">
          <legend>Signup With</legend>
          <div class="social-icons">
            <i class="uil uil-facebook socials"></i>
          </div>
          <div class="social-icons">
            <i class="uil uil-google socials"></i>
          </div>
          <div class="social-icons">
            <i class="uil uil-twitter socials"></i>
          </div>
        </fieldset>
      </div>
    </div>

    <!-- Signup From -->
    <div v-if="showSignupForm" class="form forms">
      <form action="#">
        <div class="table-head">
          <h2>Register Now</h2>
        </div>

        <div class="input_box light-margin">
          <input type="text" placeholder="Firstname" required />
          <i class="uil uil-user email"></i>
        </div>

        <div class="input_box light-margin">
          <input type="email" placeholder="Email" required />
          <i class="uil uil-envelope-alt email"></i>
        </div>
        <div class="input_box light-margin">
          <input type="phone" placeholder="Phone number" required />
          <i class="uil uil-envelope-alt email"></i>
        </div>

        <div class="input_box light-margin">
          <input type="text" placeholder="Full Address" required />
          <i class="uil uil-bag-alt email"></i>
        </div>

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

        <button class="button">Register</button>
        <div class="signupBtn">
          <p>Already Have an Account?</p>
          <a @click="toggleForms">Login Now!</a>
        </div>
      </form>
      <div class="content">
        <div class="table-head tag">
          <h1>Your Shop</h1>
        </div>
        <div class="text-content">
          <p>
            Login and Get <b> <i>News & Offers</i> </b> about our
            <b> <i>Deals</i> </b> and <b> <i>New Arrivals</i> </b>, we always be
            connected with our customers to give best opppertunity !
          </p>
        </div>

        <fieldset class="social-login">
          <legend>Signup With</legend>
          <div class="social-icons">
            <i class="uil uil-facebook socials"></i>
          </div>
          <div class="social-icons">
            <i class="uil uil-google socials"></i>
          </div>
          <div class="social-icons">
            <i class="uil uil-twitter socials"></i>
          </div>
        </fieldset>
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
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-image: url("@/assets/ComponentsImages/11.jpg");
  position: fixed;
  width: max-content;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: row;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 1000;
  padding: 16px;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-out;
}
form {
  padding: 16px;
  border: none;
  backdrop-filter: blur(6px);
}
.forms {
  display: flex;
  gap: 16px;
}

.form_close {
  position: absolute;
  padding: 0px 4px;
  border: none;
  border-radius: 4px;
  top: 8px;
  right: 8px;
  color: #34a8ac;
  background-color: #fff;
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
  width: 260px;
  flex-grow: 1;
}
.input_box input {
  box-sizing: border-box;
  position: absolute;
  height: 100%;
  width: 100%;
  outline: none;
  padding: 1px 30px;
  background-color: transparent;
  color: #f9f9f9;
  transition: 0.2s ease;
  border: 2px solid #ffffff;
  border-radius: 4px;
}
.input_box input:active {
  background-color: #34a8ac;
}
.input_box input::placeholder {
  color: #ffffff;
}
.light-margin {
  margin-top: 6px;
}
.max-margin {
  margin-top: 25px;
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
  color: #34a8ac;
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
.social-login {
  border: 1px solid #fff;
  margin: 10px 0px;
  display: flex;
  justify-content: space-evenly;
}
.social-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
  gap: 4px;
}

.social-icons p {
  font-size: 0.7rem;
  color: #ffffff;
}
.social-icons i {
  cursor: pointer;
  font-size: 1.7rem;
  box-shadow: 0px 0px 6px 0px #ffffff;
  border-radius: 4px;
  background-color: #34a8ac;
  padding: 0px 7px;
  transition: all 0.2s ease-in-out;
  color: #ffffff;
}
.social-icons i:hover {
  translate: scale(1.01);
  background-color: #fff;
  color: #34a8ac;
}

.content {
  top: 120px;
  width: 100%;
  width: 240px;
}
.tag {
  margin-top: 30px;
  margin-bottom: 16px;
}
h1 {
  color: #ffffff;
  text-align: center;
}
.text-content {
  padding: 6px;
  backdrop-filter: blur(6px);
}
.text-content p {
  text-align: center;
  color: #ffffff;
  font-size: 1.2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
fieldset {
  padding: 10px 0px;
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
