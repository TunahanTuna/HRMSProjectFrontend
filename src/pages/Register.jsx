import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import CandidateService from "../services/candidateService";
import { useFormik } from "formik";

export default function Register() {

  let candidateService = new CandidateService();
  const candidateRegisterSchema = Yup.object().shape({
    birthDate: Yup.date().required("Doğum Tarihi zorunludur"),
    email: Yup.string().required("Email alanı zorunludur").email("Geçerli bir email değil"),
    reEmail: Yup.string().oneOf([Yup.ref("email"),null],"Email bilgileri birbiri ile eşleşmıyor").required("Email Tekrar zorunludur"),
    firstName: Yup.string().required("İsim zorunludur"),
    lastName: Yup.string().required("Soy isim zorunludur"),
    nationalityId: Yup.string().required("Kimlik numarası zorunludur").length(11,"Kımlık numarası hatalı").matches(/^[0-9]+$/, "Sadece rakam girilmelidir"),
    password: Yup.string().required("Şifre zorunludur").min(8,"Şifre en az 8 karakter uzunlugunda olmalıdır"),
    rePassword: Yup.string().oneOf([Yup.ref("password"),null], "Şifreler eşleşmiyor")
  });

  const history = useHistory();

  const formik= useFormik({
    initialValues: {
      birthDate:"",
      email:"",
      firstName:"",
      lastName:"",
      nationalityId:"",
      password:"",
      rePassword:"",
    },
    validationSchema: candidateRegisterSchema,
    onSubmit:(values) => {
      console.log(values)
      candidateService.registerCandidate(values).then((result) => alert(result.message))
      history.push("/login")
    }
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName,value);
  }

  return (
    <div>
      <Header as="h2" color="blue" textAlign="center">
      <h2>Register</h2>
      </Header>
      <Form size="large" onSubmit={formik.handleSubmit}>
        <Segment stacked>
          <Grid stackable>
            <Grid.Column width={8}>
            <div style={{marginTop:"1em"}}>
              <label><b>First Name</b></label>
              
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="First Name"
                type="text"
                value={formik.values.firstName}
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.firstName && formik.touched.firstName && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.firstName}
                  </div>
                )
              }
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Last Name</b></label>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
                type="text"
                value={formik.values.lastName}
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.lastName}
                  </div>
                )}
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Nationality Id</b></label>
              <Form.Input
                fluid
                icon="id card"
                iconPosition="left"
                placeholder="Nationality Id"
                type="text"
                value={formik.values.nationalityId}
                name="nationalityId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.nationalityId && formik.touched.nationalityId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.nationalityId}
                  </div>
                )}
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Birth Date</b></label>
              <Form.Input
                fluid
                icon="calendar times"
                iconPosition="left"
                placeholder="Birth Date"
                type="date"
                error={Boolean(formik.errors.birthDate)}
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "birthDate")
                }
                value={formik.values.birthDate}
                onBlur={formik.handleBlur}
                name="birthDate"
              />
              {formik.errors.birthDate && formik.touched.birthDate && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.birthDate}
                  </div>
                )}
              </div>
            </Grid.Column>

            <Grid.Column width={8}>
              <div style={{marginTop:"1em"}}>
            <label><b>Email</b></label>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
              />
              {formik.errors.email && formik.touched.email && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Repeat Email</b></label>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="Repeat Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="reEmail"
              />
              {formik.errors.reEmail && formik.touched.reEmail && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.reEmail}
                  </div>
                )}
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Password</b></label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
              />
               {formik.errors.password && formik.touched.password && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Repeat Password</b></label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Repeat Password"
                type="password"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="rePassword"
              />
              {formik.errors.rePassword && formik.touched.rePassword && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.rePassword}
                  </div>
                )}
              </div>
            </Grid.Column>
          </Grid>

            <br/>
          <Button color="blue" fluid size="large" type="submit">
            Register
          </Button>
        </Segment>
      </Form>
      <Message info><Link to={"/registerEmployer"}>Click here to register as an employer</Link></Message>
    </div>
  );
}