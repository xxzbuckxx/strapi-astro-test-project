const readingTime = require("reading-time");

export default {
  beforeCreate(event) {
    const { content } = event.params.data;
    if (content && content?.length > 0) {
      event.params.data.readingTime = readingTime(content)?.text || null;
    }
  },

  beforeUpdate(event) {
    const { content } = event.params.data;
    if (content && content?.length > 0) {
      event.params.data.readingTime = readingTime(content)?.text || null;
    }
  },
};
