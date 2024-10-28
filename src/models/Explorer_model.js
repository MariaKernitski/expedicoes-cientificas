import { Schema, model } from "mongoose";

const ExplorerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  fieldOfStudy: {
    type: String,
    required: true
  },
  expeditionsParticipated: {
    type: Number,
    required: true
  }
});

const Explorer = model("Explorer", ExplorerSchema);

export default Explorer;