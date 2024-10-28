import { Schema, model } from "mongoose";

const SpeciesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  descoveryLocation: {
    type: String,
    required: true
  },
  rarity: {
    type: Number,
    required: true
  },
  documented: {
    type: Schema.Types.Boolean,
    dafault: false,
    required: true
  }
});

const Species = model("Species", SpeciesSchema);

export default Species;