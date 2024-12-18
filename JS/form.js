

JotForm.setConditions([
  {
    action: [
      {
        id: "action_1671531409166",
        visibility: "Show",
        isError: false,
        field: "61",
      },
    ],
    id: "1671531419676",
    index: "0",
    link: "Any",
    priority: "0",
    terms: [
      {
        id: "term_1671531409166",
        field: "60",
        operator: "equals",
        value: "Yes",
        isError: false,
      },
    ],
    type: "field",
  },
]);
JotForm.init(function () {
  /*INIT-START*/
  JotForm.description(
    "input_66",
    "AIET<br />Alamgir Institute of Enginnering And technalogy"
  );
  JotForm.setPhoneMaskingValidator("input_41_full", "(###) ###-####");
  setTimeout(function () {
    $("input_55").hint("ex: myname@example.com");
  }, 20);
  if (window.JotForm && JotForm.accessible)
    $("input_59").setAttribute("tabindex", 0);
  JotForm.setPhoneMaskingValidator("input_69_full", "(###) ###-####");
  if (window.JotForm && JotForm.accessible)
    $("input_61").setAttribute("tabindex", 0);
  if (window.JotForm && JotForm.accessible)
    $("input_63").setAttribute("tabindex", 0);

  JotForm.calendarMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  JotForm.calendarDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  JotForm.calendarOther = {
    today: "Today",
  };
  var languageOptions = document.querySelectorAll("#langList li");
  for (
    var langIndex = 0;
    langIndex < languageOptions.length;
    langIndex++
  ) {


  JotForm.alterTexts({
    confirmClearForm: "Are you sure you want to clear the form",
    lessThan: "Your score should be less than",
  });
  /*INIT-END*/
});

JotForm.prepareCalculationsOnTheFly([
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  {
    name: "gender",
    qid: "15",
    text: "Gender",
    type: "control_radio",
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  {
    name: "ofWhich",
    qid: "27",
    text: "Of which country are you a citizen?",
    type: "control_dropdown",
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  {
    name: "birthDate39",
    qid: "39",
    text: "Birth Date",
    type: "control_birthdate",
  },
  null,
  {
    name: "phone",
    qid: "41",
    text: "Phone",
    type: "control_phone",
  },
  {
    name: "address42",
    qid: "42",
    text: "Mailing Address",
    type: "control_address",
  },
  {
    name: "clickTo",
    qid: "43",
    text: "College Admissions Form",
    type: "control_head",
  },
  null,
  null,
  {
    name: "pageBreak",
    qid: "46",
    text: "Page Break",
    type: "control_pagebreak",
  },
  null,
  null,
  {
    name: "clickTo49",
    qid: "49",
    text: "Application Fee",
    type: "control_head",
  },
  {
    description: "Payment is due 3 days prior to the start of the class",
    name: "paymentMethod",
    qid: "50",
    text: "Payment Method:",
    type: "control_checkbox",
  },
  null,
  {
    name: "submitForm",
    qid: "52",
    text: "Submit Form",
    type: "control_button",
  },
  null,
  null,
  {
    name: "emailAddress",
    qid: "55",
    subLabel: "example@example.com",
    text: "E-mail Address",
    type: "control_email",
  },
  {
    name: "name",
    qid: "56",
    text: "Name",
    type: "control_fullname",
  },
  {
    name: "pageBreak57",
    qid: "57",
    text: "Page Break",
    type: "control_pagebreak",
  },
  {
    name: "emergencyContact",
    qid: "58",
    text: "Emergency Contact",
    type: "control_fullname",
  },
  {
    name: "relationship",
    qid: "59",
    text: "Relationship",
    type: "control_textbox",
  },
  {
    name: "doYou",
    qid: "60",
    text: "Do you speak any languages other than English?",
    type: "control_radio",
  },
  {
    name: "pleaseList",
    qid: "61",
    text: "Please list them",
    type: "control_textarea",
  },
  {
    name: "education",
    qid: "62",
    text: "Education",
    type: "control_head",
  },
  {
    name: "highSchool",
    qid: "63",
    text: "High School or Equivalent Name",
    type: "control_textbox",
  },
  {
    name: "schoolAddress",
    qid: "64",
    text: "School Address",
    type: "control_address",
  },
  {
    name: "graduationDate",
    qid: "65",
    text: "Graduation Date",
    type: "control_datetime",
  },
  {
    description: "AIET\nAlamgir Institute of Enginnering And technalogy",
    name: "asset2068402x639c70926ea1a995874275",
    qid: "66",
    text: "alamgir-removebg-preview%20(1).63ae8edf4faf20.61617685",
    type: "control_image",
  },
  null,
  {
    name: "email",
    qid: "68",
    subLabel: "example@example.com",
    text: "Email",
    type: "control_email",
  },
  {
    name: "phoneNumber",
    qid: "69",
    text: "Phone Number",
    type: "control_phone",
  },
]);
setTimeout(function () {
  JotForm.paymentExtrasOnTheFly([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      name: "gender",
      qid: "15",
      text: "Gender",
      type: "control_radio",
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      name: "ofWhich",
      qid: "27",
      text: "Of which country are you a citizen?",
      type: "control_dropdown",
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      name: "birthDate39",
      qid: "39",
      text: "Birth Date",
      type: "control_birthdate",
    },
    null,
    {
      name: "phone",
      qid: "41",
      text: "Phone",
      type: "control_phone",
    },
    {
      name: "address42",
      qid: "42",
      text: "Mailing Address",
      type: "control_address",
    },
    {
      name: "clickTo",
      qid: "43",
      text: "College Admissions Form",
      type: "control_head",
    },
    null,
    null,
    {
      name: "pageBreak",
      qid: "46",
      text: "Page Break",
      type: "control_pagebreak",
    },
    null,
    null,
    {
      name: "clickTo49",
      qid: "49",
      text: "Application Fee",
      type: "control_head",
    },
    {
      description:
        "Payment is due 3 days prior to the start of the class",
      name: "paymentMethod",
      qid: "50",
      text: "Payment Method:",
      type: "control_checkbox",
    },
    null,
    {
      name: "submitForm",
      qid: "52",
      text: "Submit Form",
      type: "control_button",
    },
    null,
    null,
    {
      name: "emailAddress",
      qid: "55",
      subLabel: "example@example.com",
      text: "E-mail Address",
      type: "control_email",
    },
    {
      name: "name",
      qid: "56",
      text: "Name",
      type: "control_fullname",
    },
    {
      name: "pageBreak57",
      qid: "57",
      text: "Page Break",
      type: "control_pagebreak",
    },
    {
      name: "emergencyContact",
      qid: "58",
      text: "Emergency Contact",
      type: "control_fullname",
    },
    {
      name: "relationship",
      qid: "59",
      text: "Relationship",
      type: "control_textbox",
    },
    {
      name: "doYou",
      qid: "60",
      text: "Do you speak any languages other than English?",
      type: "control_radio",
    },
    {
      name: "pleaseList",
      qid: "61",
      text: "Please list them",
      type: "control_textarea",
    },
    {
      name: "education",
      qid: "62",
      text: "Education",
      type: "control_head",
    },
    {
      name: "highSchool",
      qid: "63",
      text: "High School or Equivalent Name",
      type: "control_textbox",
    },
    {
      name: "schoolAddress",
      qid: "64",
      text: "School Address",
      type: "control_address",
    },
    {
      name: "graduationDate",
      qid: "65",
      text: "Graduation Date",
      type: "control_datetime",
    },
    {
      description:
        "AIET\nAlamgir Institute of Enginnering And technalogy",
      name: "asset2068402x639c70926ea1a995874275",
      qid: "66",
      text: "alamgir-removebg-preview%20(1).63ae8edf4faf20.61617685",
      type: "control_image",
    },
    null,
    {
      name: "email",
      qid: "68",
      subLabel: "example@example.com",
      text: "Email",
      type: "control_email",
    },
    {
      name: "phoneNumber",
      qid: "69",
      text: "Phone Number",
      type: "control_phone",
    },
  ]);
}, 20);
</script>