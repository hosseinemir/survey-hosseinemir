import { model, models, Schema } from "mongoose";

const SurveySchema = new Schema({
  suser: {
    type: String,
    require: true,
  },
  sname: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
    default:""
  },
  uni: {
    type:String,
    default:""
  },
  detail:{
    type:String,
    default:""
  },
  questions: {
    type: Array,
    require: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const SurveyModel = models.SurveyModel || model("SurveyModel", SurveySchema);
export default SurveyModel;
