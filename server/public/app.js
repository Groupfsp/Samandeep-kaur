const EmployeeSearch = () => /*#__PURE__*/React.createElement("nav", {
  className: "navbar navbar-expand-lg navbar-light bg-light"
}, /*#__PURE__*/React.createElement("div", {
  className: "container-fluid"
}, /*#__PURE__*/React.createElement("a", {
  className: "navbar-brand",
  href: "#"
}, "Assignment 2"), /*#__PURE__*/React.createElement("button", {
  className: "navbar-toggler",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#navbarColor01",
  "aria-controls": "navbarColor01",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, /*#__PURE__*/React.createElement("span", {
  className: "navbar-toggler-icon"
})), /*#__PURE__*/React.createElement("div", {
  className: "collapse navbar-collapse",
  id: "navbarColor01"
}, /*#__PURE__*/React.createElement("ul", {
  className: "navbar-nav me-auto"
}, /*#__PURE__*/React.createElement("li", {
  className: "nav-item"
}, /*#__PURE__*/React.createElement("a", {
  className: "nav-link active",
  href: "#"
}, "Home")), /*#__PURE__*/React.createElement("li", {
  className: "nav-item"
}, /*#__PURE__*/React.createElement("a", {
  className: "nav-link",
  href: "/List"
}, "Employee"))))));
const EmployeeTable = ({
  Employees
}) => /*#__PURE__*/React.createElement("table", {
  className: "table table-light"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Id"), /*#__PURE__*/React.createElement("th", null, "First Name"), /*#__PURE__*/React.createElement("th", null, "Last Name"), /*#__PURE__*/React.createElement("th", null, "Age"), /*#__PURE__*/React.createElement("th", null, "Date Of Joining"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Department"), /*#__PURE__*/React.createElement("th", null, "Employee Type"), /*#__PURE__*/React.createElement("th", null, "Current Status"))), /*#__PURE__*/React.createElement("tbody", null, Employees && Employees.map((employee, i) => /*#__PURE__*/React.createElement("tr", {
  key: i
}, /*#__PURE__*/React.createElement("th", null, i), /*#__PURE__*/React.createElement("td", null, employee.firstName), /*#__PURE__*/React.createElement("td", null, employee.lastName), /*#__PURE__*/React.createElement("td", null, employee.age), /*#__PURE__*/React.createElement("td", null, employee.dateOfJoining), /*#__PURE__*/React.createElement("td", null, employee.title), /*#__PURE__*/React.createElement("td", null, employee.department), /*#__PURE__*/React.createElement("td", null, employee.employeeType), /*#__PURE__*/React.createElement("td", null, employee.currentStatus ? "Working" : "Retired")))));
const EmployeeCreate = ({
  addEmployee
}) => {
  const [error, setError] = React.useState({});
  const formSubmit = e => {
    e.preventDefault();
    const form = document.forms.employeeForm;
    const newEmployee = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      age: form.age.value,
      dateOfJoining: form.dateOfJoining.value,
      title: form.title.value,
      department: form.department.value,
      employeeType: form.employeeType.value,
      currentStatus: 1
    };
    if (true) {
      addEmployee(newEmployee);
      const query = ` mutation Mutation {  postEmployee (  firstName:"${newEmployee.firstName}", lastName:"${newEmployee.lastName}",
            age: ${newEmployee.age},
            dateOfJoining: "${newEmployee.dateOfJoining}",
            title: "${newEmployee.title}",
            department: "${newEmployee.department}",
            employeeType: "${newEmployee.employeeType}",
            currentStatus:1) {
                eid
                firstName,
                lastName,
                age,
                dateOfJoining,
                title,
                department,
                employeeType,
                currentStatus
          }}`;
      fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query
        })
      }).then(async function (response) {
        const body = await response.json();
      });
      form.reset();
      setError({});
    } else {
      setError(err);
    }
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "border  border-secondary p-3",
    name: "employeeForm",
    onSubmit: formSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "p-1 pt-2"
  }, "First Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control  border-secondary",
    name: "firstName",
    placeholder: "First name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "p-1 pt-2"
  }, "Last Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control  border-secondary",
    name: "lastName",
    placeholder: "Last name"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "p-1 pt-2"
  }, "Age"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "form-control  border-secondary",
    name: "age",
    placeholder: "age"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "p-1 pt-2"
  }, "Date of Joining"), /*#__PURE__*/React.createElement("input", {
    type: "Date",
    className: "form-control border-secondary",
    name: "dateOfJoining",
    placeholder: "Joining Date"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "p-1 pt-2"
  }, "Title"), /*#__PURE__*/React.createElement("select", {
    id: "inputState",
    className: "form-control border-secondary",
    name: "title"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Employee"
  }, "Employee"), /*#__PURE__*/React.createElement("option", {
    value: "Manager"
  }, "Manager"), /*#__PURE__*/React.createElement("option", {
    value: "Director"
  }, "Director"), /*#__PURE__*/React.createElement("option", {
    value: "VP"
  }, "VP"))), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "p-1 pt-2"
  }, "Department"), /*#__PURE__*/React.createElement("select", {
    id: "inputState",
    className: "form-control border-secondary",
    name: "department"
  }, /*#__PURE__*/React.createElement("option", {
    value: "IT"
  }, "IT"), /*#__PURE__*/React.createElement("option", {
    value: "Marketing"
  }, "Marketing"), /*#__PURE__*/React.createElement("option", {
    value: "HR"
  }, "HR"), /*#__PURE__*/React.createElement("option", {
    value: "Engineering"
  }, "Engineering")))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "p-1 pt-2"
  }, "Employee Type"), /*#__PURE__*/React.createElement("select", {
    id: "inputState",
    className: "form-control border-secondary",
    name: "employeeType"
  }, /*#__PURE__*/React.createElement("option", {
    value: "FullTime"
  }, "FullTime"), /*#__PURE__*/React.createElement("option", {
    value: "PartTime"
  }, "PartTime"), /*#__PURE__*/React.createElement("option", {
    value: "Contract"
  }, "Contract"), /*#__PURE__*/React.createElement("option", {
    value: "Seasonal"
  }, "Seasonal")))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary w-100 my-3 lead"
  }, "Submit"));
};
const EmployeeDirectory = () => {
  const [employees, setEmployees] = React.useState([]);
  const addEmployee = newEmployee => {
    if (employees == null) {
      return setEmployees([newEmployee]);
    }
    setEmployees([...employees, newEmployee]);
  };
  React.useEffect(() => {
    const query = `query GetEmployees {
            getEmployees {
                eid
              firstName
              lastName
              age
              dateOfJoining
              title
              department
              employeeType
              currentStatus
            }
          }`;
    fetch('http://localhost:3003/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(res => res.json()).then(res => setEmployees(res.data.getEmployees));
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(EmployeeTable, {
    Employees: employees
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(EmployeeCreate, {
    addEmployee: addEmployee
  }));
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(EmployeeDirectory, null));