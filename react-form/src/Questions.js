export const questions = [
    {
      section: 1,
      items: [
        {
          label: "Username",
          type: "text",
          key: "username",
        },
        {
          label: "Password",
          type: "password",
          key: "password",
        },
      ],
    },
    {
      section: 2,
      items: [
        {
          label: "Street Address",
          type: "text",
          key: "street",
        },
        {
          label: "Postal Code",
          type: "text",
          key: "postalcode",
        },
        {
          label: "State",
          type: "select",
          key: "state",
          options: ["State 1", "State 2"],
        },
      ],
    },
    {
      section: 3,
      items: [
        {
          label: "If you are ready to submit please press `Submit`",
          type: "information",
        },
      ],
    },
  ];
  