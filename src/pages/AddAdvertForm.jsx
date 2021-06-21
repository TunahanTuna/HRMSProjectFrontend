import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import AdvertFormWorkTimeService from "../services/advertFormWorkTimeService";
import AdvertFormWorkTypeService from "../services/advertFormWorkTypeService";
import AdvertFormService from "../services/advertFormService";
import { useHistory } from "react-router-dom";

export default function AddAdvertForm() {
  let advertFormService = new AdvertFormService();
  const JobAdvertAddSchema = Yup.object().shape({
    deadlineDate: Yup.date()
      .nullable()
      .required("Mandatory Field"),
    description: Yup.string().required("Mandatory Field"),
    jobPositionId: Yup.string().required("Mandatory Field"),
    workTimeId: Yup.string().required("Mandatory Field"),
    workTypeId: Yup.string().required("Mandatory Field"),
    openPositionNumber: Yup.string()
      .required("Open Position number is mandatory")
      .min(1, "Number of positions cannot be less than 1"),
    cityId: Yup.string().required("Mandatory Field"),
    minPay: Yup.number()
      .min(0, "Cannot be less than 0")
      .required("Mandatory Field"),
      maxPay: Yup.number()
      .min(0, "Cannot be less than 0")
      .required("Mandatory Field"),
  });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      description: "",
      jobPositionId: "",
      workTimeId: "",
      workTypeId: "",
      openPositionNumber: "",
      cityId: "",
      minPay: "",
      maxPay: "",
      deadlineDate: "",
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {
      values.employerId = 2;
      advertFormService.add(values).then((result) => console.log(result.data.data));
      alert("Job posting has been added and will be listed after the staff's approval");
      console.log(values);
      history.push("/advertForms");
    },
  });

  const [workTimes, setWorkTimes] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let advertFormWorkTimeService = new AdvertFormWorkTimeService();
    let advertFormWorkTypeService = new AdvertFormWorkTypeService();
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();

    advertFormWorkTimeService
      .getAll()
      .then((result) => setWorkTimes(result.data.data));
      advertFormWorkTypeService
      .getAll()
      .then((result) => setWorkTypes(result.data.data));
    cityService.getAll().then((result) => setCities(result.data.data));
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const workTypeOption = workTimes.map((workTime, index) => ({
    key: index,
    text: workTime.workTmee,
    value: workTime.id,
  }));
  const workTimeOption = workTypes.map((workType, index) => ({
    key: index,
    text: workType.workType,
    value: workType.id,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.positionName,
    value: jobPosition.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Card fluid>
        <Card.Content header="Add Job Adversiment" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field style={{ marginBottom: "1rem" }}>
              <Dropdown
                clearable
                item
                placeholder="Job Position"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "jobPositionId")
                }
                onBlur={formik.onBlur}
                id="jobPositionId"
                value={formik.values.jobPositionId}
                options={jobPositionOption}
              />
              {formik.errors.jobPositionId && formik.touched.jobPositionId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.jobPositionId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="City"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "cityId")
                }
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.cityId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Work Type"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workTypeId")
                }
                onBlur={formik.onBlur}
                id="workTypeId"
                value={formik.values.workTypeId}
                options={workTimeOption}
              />
              {formik.errors.workTypeId && formik.touched.workTypeId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workTypeId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Work Time"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workTimeId")
                }
                onBlur={formik.onBlur}
                id="workTimeId"
                value={formik.values.workTimeId}
                options={workTypeOption}
              />
              {formik.errors.workTimeId && formik.touched.workTimeId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workTimeId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Minimum Pay"
                    value={formik.values.minPay}
                    name="minPay"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.minPay && formik.touched.minPay && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.minPay}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maximum Pay"
                    value={formik.values.maxSalary}
                    name="maxPay"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.maxPay && formik.touched.maxPay && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.maxPay}
                    </div>
                  )}
                </Grid.Column>
              </Grid>
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    id="openPositionNumber"
                    name="openPositionNumber"
                    error={Boolean(formik.errors.openPositionNumber)}
                    onChange={formik.handleChange}
                    value={formik.values.openPositionNumber}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Açık Posisyon sayısı"
                  />
                  {formik.errors.openPositionNumber && formik.touched.openPositionNumber && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.openPositionNumber}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="datetime-local"
                    error={Boolean(formik.errors.lastDate)}
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "deadlineDate")
                    }
                    value={formik.values.appealExpirationDate}
                    onBlur={formik.handleBlur}
                    name="deadlineDate"
                    s
                    placeholder="Deadline Date"
                  />
                  {formik.errors.deadlineDate &&
                    formik.touched.deadlineDate && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.deadlineDate}
                      </div>
                    )}
                </Grid.Column>
              </Grid>
            </Form.Field>

            <Form.Field>
              <TextArea
                placeholder="Description"
                style={{ minHeight: 100 }}
                error={Boolean(formik.errors.description).toString()}
                value={formik.values.description}
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.description}
                </div>
              )}
            </Form.Field>
            <Button
              content="Add"
              labelPosition="right"
              icon="add"
              positive
              type="submit"
              style={{ marginLeft: "20px" }}
            />
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
