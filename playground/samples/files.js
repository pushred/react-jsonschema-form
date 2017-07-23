module.exports = {
  schema: {
    title: "Files",
    type: "object",
    properties: {
      file: {
        type: "string",
        format: "data-url",
        title: "Single file",
      },
      files: {
        type: "array",
        title: "Multiple files",
        items: {
          type: "string",
          format: "data-url",
        },
      },
      acceptOption: {
        type: "array",
        title: "Image files only",
        items: {
          type: "string",
          format: "data-url",
        },
      },
    },
  },
  uiSchema: {
    acceptOption: {
      "ui:options": {
        accept: "image/*",
      },
    },
  },
  formData: {},
};
