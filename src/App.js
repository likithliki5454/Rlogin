import React from "react";
import "./App.css";

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      hidden: true,
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm =
      this.submituserRegistrationForm.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["emailid"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Submitted Sucessfully");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter valid email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{6})/)) {
        formIsValid = false;
        errors["password"] = "*Please enter valid password.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <br></br>
          <h3>LOGIN FORM</h3>
          <hr></hr>
          <br></br>
          <form
            method=""
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
          >
            <label>Email ID:</label>
            <input
              type="text"
              name="emailid"
              value={this.state.fields.emailid}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.emailid}</div>

            <label>Password:</label>
            <input
              type={this.state.hidden ? "password" : "text"}
              name="password"
              value={this.state.fields.password}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.password}</div>
            <input type="submit" className="button" value="Register" />
          </form>
          <button onClick={this.toggleShow} id="myb">
            <i class="fas fa-eye"></i> <span>Show Password</span>
          </button>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
