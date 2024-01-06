import mongoose , {Schema} from "mongoose";


const accountswipSchema = new Schema (
    {
        username: String ,
        dorm: String,
        img:String,
        faculty:String,
        gender:String
        
        
    },
    { timestamps : true ,}
);
const Acco = mongoose.models.Acco || mongoose.model("Acco",accountswipSchema);

export default Acco;