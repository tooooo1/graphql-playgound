const express = require("express");
const cors = require("cors");

const PORT = 4000;

const app = express();

app.use(cors());

app.get("/timeline", (_, res) => {
  res.json({
    data: {
      timeline: [
        {
          id: "1",
          message: "BFF 이번엔 제발 성공",
        },
      ],
    },
  });
});

app.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${PORT}/timeline`
  );
});
