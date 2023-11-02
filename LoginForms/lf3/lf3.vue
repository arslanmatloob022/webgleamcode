<template>
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
  />
  <div class="form_container">
    <div class="formHeader"></div>
    <i class="uil uil-times form_close" @click="closeForm"></i>
    <!-- Login From -->
    <div v-if="showLoginForm" class="form login_form">
      <form action="#">
        <div class="table-head">
          <h2>Login</h2>
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
    </div>

    <!-- Signup From -->
    <div v-if="showSignupForm" class="form signup_form row">
      <form action="#">
        <div class="table-head">
          <h2>Register Now</h2>
        </div>
        <div class="input-boxes">
          <div class="input_box">
            <input type="text" placeholder="Enter fullname" required />
            <i class="uil uil-user email"></i>
          </div>
          <div class="input_box">
            <input type="email" placeholder="Enter email" required />
            <i class="uil uil-envelope-alt email"></i>
          </div>
        </div>

        <div class="input-boxes">
          <div class="input_box">
            <input
              type="address"
              placeholder="Enter permanent address"
              required
            />
            <i class="uil uil-user-location address"></i>
          </div>
          <div class="input_box">
            <input type="date" placeholder="Enter Date-of-birth" required />
            <i class="uil uil-calender email"></i>
          </div>
        </div>

        <div class="input-boxes">
          <div class="input_box">
            <select type="select" required>
              <option value="default">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">female</option>
            </select>
            <i class="uil uil-mars email"></i>
          </div>

          <div class="input_box">
            <input type="text" placeholder="Enter Occupation" required />
            <i class="uil uil-bag-alt email"></i>
          </div>
        </div>

        <div class="input-boxes">
          <div class="input_box">
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

          <div class="input_box">
            <input
              type="password"
              class="password"
              placeholder="Confirm  password"
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
  background-image: linear-gradient(180deg, #ffffff 50%, #919191 50%);
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 101;
  padding: 16px;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-out;
}
form {
  background: #ffffff;
  background-image: linear-gradient(360deg, #ffffff 85%, #919191 15%);
  padding: 16px;
  border-radius: 6px;
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
  color: #d91e36;
}
.signupBtn a {
  cursor: pointer;
}
.input-boxes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.form_close {
  position: absolute;
  padding: 0px 4px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  top: 4px;
  right: 4px;
  color: #d91e36;
  background-color: #919191;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 0px 6px 1px #bdbdbd;
}
.form_close:hover {
  opacity: 1;
  transform: scale(1.1);
  box-shadow: 1px 0px 8px 2px #bdbdbd;
}
.form_container h2 {
  font-size: 22px;
  text-align: center;
  color: #ffffff;
}
.input_box {
  position: relative;
  box-sizing: border-box;
  margin-top: 30px;
  height: 40px;
  width: 260px;
  flex-grow: 1;
  flex-basis: 200;
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
.input_box input:focus {
  border-color: #d91e36;
  box-shadow: 1px 0px 4px 1px #bdbdbd;
}
.input_box i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #d91e36;
  margin: 0px 6px;
}
.input_box i.email,
.input_box i.password {
  left: 0;
}
.input_box input:focus ~ i.email,
.input_box input:focus ~ i.password {
  color: #d91e36;
}
.input_box i.pw_hide {
  color: #d91e36;
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
  color: #d91e36;
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
  accent-color: #d91e36;
}
.checkbox label {
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  color: #d91e36;
}
.form_container .button {
  background: #ffffff;
  border: none;
  margin-top: 30px;
  width: 100%;
  padding: 7px 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  color: #d91e36;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 0px 6px 1px #bdbdbd;
}
.form_container .button:hover {
  opacity: 1;
  transform: scale(1.01);
  box-shadow: 1px 0px 8px 2px #bdbdbd;
}

.login_signup {
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  color: #d91e36;
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
}
</style>
